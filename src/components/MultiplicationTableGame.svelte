<script lang="ts">
    const getRandomNumber = (largest: number) =>
        Math.floor(Math.random() * largest);

    const shakeOptionEvent = () => {
        if (correctAnswer)
            choicesEl
                .querySelector('[data-opt="' + correctAnswer + '"]')
                ?.classList.add("shake");

        setQuestionState(-1);
        sliding = false;
    };

    const beginOptionShake = () => {
            if (correctAnswer)
                svg.querySelector(
                    '[data-opt="' + correctAnswer + '"]',
                )?.classList.add("shake");
        },
        endOptionShake = () =>
            choicesEl
                ?.querySelectorAll(".shake")
                .forEach((el) => el.classList.remove("shake"));

    const beginQuestionShake = () => questionEl?.classList.add("shake"),
        endQuestionShake = () => questionEl?.classList.remove("shake");

    const setQuestionState = (value: number) => {
        if (!questionState[number1]) questionState[number1] = {};
        questionState[number1][number2] = value;
    };

    const playing = () => {
        // end game
        if (!shuffleNumbers.length) {
            gameEnd(numberOfChoices);
            question = "✓";
            return false;
        }

        // shuffle
        shuffleArI1 = getRandomNumber(shuffleNumbers.length);
        const res1 = shuffleNumbers[shuffleArI1];
        shuffleArI2 = getRandomNumber(res1[1].length);
        const res2 = res1[1][shuffleArI2];
        number1 = res1[0];
        number2 = res2;

        // answer
        correctAnswer = number1 * number2;

        // question
        question = number1 + " x " + number2;

        // build choices
        const buildChoices: number[] = [correctAnswer];

        while (buildChoices.length < numberOfChoices) {
            const option = getRandomNumber(100) + 1;
            if (!buildChoices.includes(option)) buildChoices.push(option);
        }

        // shuffle choices
        for (let i = buildChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [buildChoices[i], buildChoices[j]] = [
                buildChoices[j],
                buildChoices[i],
            ];
        }

        // set choices
        choices = buildChoices;

        return true;
    };

    const play = () => {
        if (!playing()) return;

        // choices slide
        sliding = true;
        choicesElSlide?.addEventListener("finish", shakeOptionEvent);
        choicesElSlide?.play();
    };

    const pause = () => {
        gamePaused = true;
        beginQuestionShake();
        choicesElSlide?.pause();
    };

    const unpause = () => {
        gamePaused = false;
        endQuestionShake();
        choicesElSlide?.play();
    };

    const gameEnd = (numberOfChoices: number) => {
        gameOn = false;
        choices = Array(numberOfChoices).fill("?");
        questionState = {};
        beginQuestionShake();
        choicesElSlide?.cancel();
        shuffleNumbers = [];
        playingNumbers = new Set();
        question = "?";
    };

    const numbersToPlayForNumber = (number: number) => {
        const arr: number[] = [];
        for (let number2 = 1; number2 <= 10; number2++) arr.push(number2);
        shuffleNumbers.push([number, arr]);
    };

    $: if (svg)
        svg.onclick = (event) => {
            event.preventDefault();
            const svgBoundaries = svg.getBoundingClientRect(),
                svgWidth = svgBoundaries.width,
                svgHeight = svgBoundaries.height,
                svgLeft = svgBoundaries.left + window.scrollX,
                svgTop = svgBoundaries.top + window.scrollY;

            const svgHMinusW = svgHeight - svgWidth;
            const choicesHeight = (svgHMinusW / 3) * 2;

            if (event.pageY < svgTop + (svgHeight - svgHMinusW)) {
                // numbers table
                const vert =
                        Math.trunc((event.pageX - svgLeft) / (svgWidth / 5)) +
                        1,
                    horiz = Math.trunc(
                        (event.pageY - svgTop) / ((svgHeight - svgHMinusW) / 2),
                    ),
                    number = vert + 5 * horiz;

                if (playingNumbers.has(number)) {
                    // remove number
                    playingNumbers.delete(number);

                    const shuffleIndex = shuffleNumbers.findIndex(
                        (el) => el[0] === number,
                    );
                    if (shuffleIndex !== -1)
                        shuffleNumbers.splice(shuffleIndex, 1);
                    delete questionState?.[number];
                } else {
                    // add number
                    playingNumbers.add(number);

                    numbersToPlayForNumber(number);
                }

                questionState = { ...questionState };

                if (!gameOn) {
                    gameOn = true;
                    gamePaused = true;
                    playing();
                } else if (playing()) {
                    choicesElSlide?.cancel();
                    if (!gamePaused) pause();
                }
            } else if (
                event.pageY <
                svgTop + (svgHeight - svgHMinusW) + choicesHeight
            ) {
                // choices
                const number = Math.trunc(
                    (event.pageX - svgLeft) / (svgWidth / numberOfChoices),
                );
                if (choices[number] === correctAnswer) {
                    // right answer
                    if (questionState?.[number1]?.[number2] !== -1) {
                        shuffleNumbers?.[shuffleArI1]?.[1].splice(
                            shuffleArI2,
                            1,
                        );
                        if (!shuffleNumbers?.[shuffleArI1]?.[1].length) {
                            playingNumbers.delete(
                                shuffleNumbers[shuffleArI1][0],
                            );
                            shuffleNumbers?.splice(shuffleArI1, 1);
                        }
                        setQuestionState(1);
                    } else {
                        setQuestionState(-2);
                    }

                    endOptionShake();

                    sliding = false;
                    choicesElSlide?.removeEventListener(
                        "finish",
                        shakeOptionEvent,
                    );
                    if (gamePaused) {
                        gamePaused = false;
                        endQuestionShake();
                    }
                    choicesElSlide?.cancel();
                    play();
                } else {
                    // wrong answer
                    setQuestionState(-1);
                    beginOptionShake();
                }
            } else {
                // question
                if (gameOn) {
                    if (gamePaused) {
                        unpause();
                    } else {
                        if (!sliding) {
                            sliding = true;
                            choicesElSlide.play();
                        } else {
                            pause();
                        }
                    }
                } else {
                    if (!playingNumbers.size)
                        for (let nr1 = 1; nr1 <= 10; nr1++)
                            playingNumbers.add(nr1);

                    playingNumbers.forEach(numbersToPlayForNumber);
                    gameOn = true;
                    endQuestionShake();
                    play();
                }
            }
        };

    $: if (choicesEl)
        choicesElSlide = new Animation(
            new KeyframeEffect(
                choicesEl,
                [
                    { transform: "translateY(0)" },
                    { transform: "translateY(420px)" },
                ],
                { duration: 7000, fill: "forwards" },
            ),
            document.timeline,
        );

    const width = 1080,
        height = 1920,
        strokeWidth = 2,
        vertGapQuestions = (width - strokeWidth * 2) / 5,
        heightMinusWidth = height - width,
        choicesHeight = (heightMinusWidth / 3) * 2;
    let gameOn = false,
        gamePaused = false;

    let number1: number,
        number2: number,
        question = "?",
        correctAnswer: number,
        questionState: { [_: number]: { [_: number]: number } } = {},
        shuffleNumbers: [number, number[]][] = [],
        shuffleArI1: number,
        shuffleArI2: number,
        playingNumbers: Set<number> = new Set();

    let choicesElSlide: Animation,
        sliding = false;

    let svg: SVGElement, choicesEl: SVGGElement, questionEl: SVGGElement;

    let numberOfChoices = +(
        localStorage.getItem("mtg number of choices") || "2"
    );
    $: localStorage.setItem("mtg number of choices", "" + numberOfChoices);

    let choices = Array(numberOfChoices).fill("?");

    $: vertGapChoices = (width - strokeWidth * 2) / numberOfChoices;
    $: textDX = (width - strokeWidth * 2) / (numberOfChoices * 2);
    $: gameEnd(numberOfChoices);
</script>

<div>
    <svg bind:this={svg} viewBox="0 0 {width} {height}" fill="none">
        <!-- outer game -->
        <rect
            x={strokeWidth}
            y={strokeWidth}
            width={width - strokeWidth * 2}
            height={height - strokeWidth * 2}
            rx="30"
            stroke-width={strokeWidth}
        />
        <!-- table numbers -->
        {#each Array(10) as _, iv}
            <text>
                {#each Array(10) as _, ih}
                    {@const x =
                        strokeWidth + 100 + 215 * (iv > 4 ? iv - 5 : iv)}
                    {@const y = (iv > 4 ? width / 2 : 0) + 0 + 43 + 53 * ih}
                    {#if !gameOn || questionState?.[iv + 1]?.[ih + 1] === 1 || !playingNumbers.has(iv + 1)}<tspan
                            text-anchor="middle"
                            textLength="165"
                            lengthAdjust="spacingAndGlyphs"
                            {x}
                            {y}
                            >{iv + 1} &times; {ih + 1} = {(iv + 1) *
                                (ih + 1)}</tspan
                        >
                    {:else}
                        <tspan
                            text-anchor="middle"
                            textLength="140"
                            lengthAdjust="spacingAndGlyphs"
                            {x}
                            {y}
                            >{iv + 1} &times; {ih + 1} = {questionState?.[
                                iv + 1
                            ]?.[ih + 1] <= -1
                                ? "!"
                                : "?"}</tspan
                        >
                    {/if}
                {/each}
            </text>
        {/each}
        <!-- table vertical lines -->
        {#each Array(4) as _, i}
            {@const x = vertGapQuestions * (i + 1)}
            <line
                x1={x}
                x2={x}
                y1={0}
                y2={height - heightMinusWidth - strokeWidth}
                stroke-width={strokeWidth}
            />
        {/each}
        <!-- table middle horizontal line -->
        <line
            x1={strokeWidth}
            x2={width - strokeWidth}
            y1={width / 2}
            y2={width / 2}
            stroke-width={strokeWidth}
        />
        <!-- table bottom line -->
        <line
            x1={strokeWidth}
            x2={width - strokeWidth}
            y1={width}
            y2={width}
            stroke-width={strokeWidth}
        />
        <!-- choices -->
        <g bind:this={choicesEl}>
            {#each Array(numberOfChoices)
                .fill(0)
                .map((_, i) => i * 2 + 1) as offset, i (i + "_" + choices[i])}
                <g data-opt={choices[i]}>
                    <text
                        y={width + 90}
                        text-anchor="middle"
                        x={textDX * offset}
                    >
                        {choices[i]}
                    </text>
                </g>
            {/each}
        </g>
        <!-- choices vertical lines -->
        {#each Array(numberOfChoices - 1) as _, i}
            {@const x = vertGapChoices * (i + 1)}
            <line
                x1={x}
                x2={x}
                y1={width}
                y2={width + choicesHeight}
                stroke-width={strokeWidth}
            />
        {/each}
        <!-- choices bottom line -->
        <line
            x1={strokeWidth}
            x2={width - strokeWidth}
            y1={width + choicesHeight}
            y2={width + choicesHeight}
            stroke-width={strokeWidth}
        />
        <!-- question -->
        <g class="shake" bind:this={questionEl}>
            <text
                class="question"
                x="535"
                y={width + choicesHeight + 155}
                text-anchor="middle"
            >
                {question}
            </text>
        </g>
    </svg>

    <label
        ><small>Number of choices:</small>
        <input
            min="1"
            max="5"
            bind:value={numberOfChoices}
            type="range"
            list="markers"
        />
        <datalist id="markers">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
        </datalist></label
    >
    {#if question !== "?"}
        <button on:click={() => gameEnd(numberOfChoices)}>Restart</button>
    {/if}
</div>

<!-- <h2>How to play</h2> -->

<ul>
    <li>
        Press the movable items to select an answer and start or pause the game.
    </li>
    <li>By default, all numbers are included in the game.</li>
    <li>Press the bottom columns to toggle the numbers you want to play.</li>
    <li>
        The numbers that have a "?" mark after "=" are the questions you will
        have to answer, which will be selected randomly.
    </li>
    <li>
        If you give the right answer, the "?" mark will be replaced with your
        answer.
    </li>
    <li>
        If you do not answer or give the wrong answer the "?" mark will be
        replace with "!" and the question will be played again.
    </li>
    <li>The game ends when all questions have been answered correctly.</li>
</ul>

<style>
    svg {
        max-height: calc(100vh - 2rem);
        user-select: none;
        display: block;
    }

    line,
    rect {
        stroke: currentColor;
    }

    text {
        fill: currentColor;
        font-family: "Courier New", Courier, monospace;
        font-size: 40px;
        font-weight: 600;
    }

    g text {
        font-weight: 400;
        font-size: 60px;
    }

    .question {
        font-size: 70px;
    }

    .shake {
        animation: shake 2.5s;
        animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% {
            transform: translateY(0);
        }
        5% {
            transform: translateY(-10px);
        }
        10% {
            transform: translateY(10px);
        }
        15% {
            transform: translateY(-10px);
        }
        20% {
            transform: translateY(10px);
        }
        25% {
            transform: translateY(-10px);
        }
        30% {
            transform: translateY(10px);
        }
        35% {
            transform: translateY(-10px);
        }
        40% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
