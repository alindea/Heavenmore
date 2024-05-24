<script lang="ts">
  import { colorScheme } from "../nav/page/color-scheme/store";

  const draw = (
    ctx: CanvasRenderingContext2D | null,
    population: number,
    individual: number,
  ) => {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue(
      "--fg-color",
    );
    drawCurve(ctx);
    drawIntersections(ctx, population, individual);
  };

  const drawCurve = (ctx: CanvasRenderingContext2D) => {
    // curve
    ctx.beginPath();
    for (let t = 0; t <= Math.PI; t += 0.01) {
      const x = radius * (t - Math.sin(t)),
        y = radius * (1 - Math.cos(t));
      ctx.lineTo(x1 + x, y1 + y);
    }
    ctx.stroke();
  };

  const getY = (x: number) => {
    let t = Math.PI / 2,
      converged = false;
    for (let i = 0; i < 10; i++) {
      const tNext = t - (t - Math.sin(t) - x / radius) / (1 - Math.cos(t)),
        delta = Math.abs(tNext - t);
      t = tNext;
      if (delta < 1e-8) {
        converged = true;
        break;
      }
    }

    const y = converged ? radius * (1 - Math.cos(t)) : 0;

    return y;
  };

  const getIndividual = (population: number, individual: number) => {
    if (individual < 1 || individual > population) return;

    const splits = x2 / population;

    const indX1 = splits * (individual - 1),
      indY1 = getY(indX1);
    const indX2 = splits * individual,
      indY2 = getY(indX2);

    const yPercentage = (indY2 - indY1) / y2;

    return { yPercentage, indX1, indY1, indX2, indY2 };
  };

  const getShare = (
    population: number,
    individual: number,
    resource: number,
    threshold: boolean,
  ) => {
    const values = getIndividual(population, individual);
    if (!values) return 0;
    const { yPercentage } = values;
    const share = yPercentage * resource;
    const number = threshold ? Math.round(share) : share;
    return number;
  };

  const drawIntersections = (
    ctx: CanvasRenderingContext2D,
    population: number,
    individual: number,
  ) => {
    const values = getIndividual(population, individual);
    if (!values) return;

    const { indX1, indY1, indX2, indY2 } = values;

    const offsetIndX1 = Math.round(x1 + indX1),
      offsetIndY1 = Math.round(y1 + indY1);
    const offsetIndX2 = Math.round(x1 + indX2),
      offsetIndY2 = Math.round(y1 + indY2);
    const offsetX1 = x1,
      offsetY1 = y1;
    const offsetX2 = x1 + x2,
      offsetY2 = y1 + y2;

    // bar
    ctx.beginPath();
    ctx.moveTo(offsetIndX1, offsetIndY1);
    ctx.lineTo(offsetIndX1, offsetY2);
    ctx.lineTo(offsetIndX2, offsetY2);
    ctx.lineTo(offsetIndX2, offsetIndY2);
    ctx.lineTo(offsetIndX2, offsetIndY1);
    ctx.lineTo(offsetIndX1, offsetIndY1);
    ctx.stroke();

    // axis
    ctx.beginPath();
    if (x1 !== offsetIndX1) {
      ctx.moveTo(offsetX1, offsetY1);
      ctx.lineTo(offsetX1, offsetY2);
    }
    ctx.moveTo(offsetX1, offsetY2);
    ctx.lineTo(offsetIndX1, offsetY2);
    ctx.moveTo(offsetIndX2, offsetY2);
    ctx.lineTo(offsetX2, offsetY2);
    ctx.stroke();
  };

  $: if (canvas) {
    canvas.width = canvasW;
    canvas.height = canvasH;
    ctx = canvas.getContext("2d");
  }

  $: draw(ctx, population, individual);

  $: {
    if (population < 1) population = 1;
    localStorage.setItem("isochrone population", "" + population);
  }
  $: {
    if (individual < 1) individual = 1;
    if (individual > population) individual = population;
    localStorage.setItem("isochrone individual", "" + individual);
  }
  $: {
    if (resource < 1) resource = 1;
    localStorage.setItem("isochrone resource", "" + resource);
  }

  $: threshold
    ? localStorage.removeItem("isochrone threshold")
    : localStorage.setItem("isochrone threshold", "-1");

  const radius = 100;

  const x1 = 1,
    y1 = 1;
  const x2 = radius * Math.PI,
    y2 = radius * 2;

  const canvasW = x1 * 2 + x2,
    canvasH = y1 * 2 + y2;

  let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null;

  let population = +(localStorage.getItem("isochrone population") || 10),
    individual = +(localStorage.getItem("isochrone individual") || 1),
    resource = +(localStorage.getItem("isochrone resource") || 1000000),
    threshold = localStorage.getItem("isochrone threshold") !== "-1";

  let elResource: HTMLInputElement;

  colorScheme.subscribe(() => {
    draw(ctx, population, individual);
  });

  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    draw(ctx, population, individual);
  });

  let addShareResponsibility: HTMLInputElement,
    addShareMotive: HTMLTextAreaElement;

  let isSharesDescriptionsDefault = true;
  const sharesDefault = ["work", "investments"];
  let shares = [...sharesDefault];

  $: population = shares.length;
</script>

<div>
  <canvas bind:this={canvas}></canvas>
  <br />
  <label>
    $<input bind:this={elResource} type="number" bind:value={resource} />
  </label>

  <label>
    <small>Round</small><input type="checkbox" bind:checked={threshold} />
  </label>
  {#if !isSharesDescriptionsDefault}
    <button
      type="button"
      on:click={() => {
        shares = [...sharesDefault];
        isSharesDescriptionsDefault = true;
        individual = 1;
        resource = 1000000;
      }}>Reset</button
    >
  {/if}
  <br />

  <form
    on:submit|preventDefault={() => {
      shares.splice(+addShareResponsibility.value - 1, 0, addShareMotive.value);
      shares = shares;
      isSharesDescriptionsDefault = false;
    }}
  >
    <table>
      <tr>
        <th>Share</th>
        <th>Responsible</th>
        <th>Motive</th>
        <th>Remove</th>
        <th>Graph</th>
      </tr>

      {#each shares as motive, i}
        <tr>
          <td
            ><b>${getShare(shares.length, i + 1, resource, threshold) || 0}</b
            ></td
          >
          <td
            ><button
              type="button"
              disabled={i === 0}
              on:click={() => {
                shares.splice(i - 1, 0, shares.splice(i, 1)[0]);
                shares = shares;
                isSharesDescriptionsDefault = false;
              }}>+</button
            >
            {i + 1}
            <button
              type="button"
              on:click={() => {
                shares.splice(i + 1, 0, shares.splice(i, 1)[0]);
                shares = shares;
                isSharesDescriptionsDefault = false;
              }}
              disabled={i === shares.length - 1}>-</button
            ></td
          >
          <td>{motive}</td>
          <td
            ><button
              type="button"
              style="color:var(--color-red-500);"
              on:click={() => {
                shares = shares.filter((_, j) => j !== i);
                isSharesDescriptionsDefault = false;
              }}>&times;</button
            ></td
          >
          <td
            ><label style="display:block;"
              ><input
                placeholder="Responsibility graph"
                on:input={() => {
                  individual = i + 1;
                  isSharesDescriptionsDefault = false;
                }}
                checked={individual === i + 1}
                name="individual"
                type="radio"
              /></label
            ></td
          >
        </tr>
      {/each}
      <tr>
        <td><button type="submit">Add share</button></td>
        <td
          ><label
            ><input
              placeholder="share responsibility"
              min="1"
              max={shares.length + 1}
              type="number"
              name="share-responsibility"
              bind:this={addShareResponsibility}
              value={shares.length + 1}
            /></label
          ></td
        >
        <td colspan="3" style="padding:0;"
          ><textarea
            bind:this={addShareMotive}
            style="display:block;"
            name="share-motive"
          ></textarea></td
        >
      </tr>
    </table>
  </form>
</div>

<style>
  table,
  th,
  td {
    border: 1px solid;
  }
  th,
  td {
    font-size: smaller;
    padding: 0 0.5em;
  }
</style>
