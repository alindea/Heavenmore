<script lang="ts">
  import { selectColorScheme } from "../nav/page/color-scheme/store";

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
    drawCycloid(ctx);
    drawIntersections(ctx, population, individual);
  };

  const drawCycloid = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();

    for (let t = 0; t <= Math.PI; t += 0.01) {
      const x = radius * (t - Math.sin(t)),
        y = radius * (1 - Math.cos(t));
      ctx.lineTo(x1 + x, y1 + y);
    }
    ctx.stroke();
  };

  const drawIntersections = (
    ctx: CanvasRenderingContext2D,
    population: number,
    individual: number,
  ) => {
    if (individual < 1 || individual > population) return;

    const splits = x2 / population;

    const indX1 = splits * (individual - 1),
      indY1 = getY(indX1);
    const indX2 = splits * individual,
      indY2 = getY(indX2);

    xPercentage = 100 / population;
    yPercentage = ((indY2 - indY1) / y2) * 100;

    const offsetIndX1 = Math.ceil(x1 + indX1),
      offsetIndY1 = Math.ceil(y1 + indY1);
    const offsetIndX2 = Math.ceil(x1 + indX2),
      offsetIndY2 = Math.ceil(y1 + indY2);
    const offsetX1 = x1,
      offsetY1 = y1;
    const offsetX2 = x1 + x2,
      offsetY2 = y1 + y2;

    // bar
    ctx.beginPath();

    // indX1, indY1 -> indX1, y2 -> indX2, y2 -> indX2, indY2
    ctx.moveTo(offsetIndX1, offsetIndY1);
    ctx.lineTo(offsetIndX1, offsetY2);
    ctx.lineTo(offsetIndX2, offsetY2);
    ctx.lineTo(offsetIndX2, offsetIndY2);
    // indX2, indY1 -> indX1, indY1
    ctx.lineTo(offsetIndX2, offsetIndY1);
    ctx.lineTo(offsetIndX1, offsetIndY1);
    // indX1, indY1 -> indX2, indY2
    ctx.stroke();

    // axis
    ctx.beginPath();

    // x1, y1 -> x1, y2
    if (x1 !== offsetIndX1) {
      ctx.moveTo(offsetX1, offsetY1);
      ctx.lineTo(offsetX1, offsetY2);
    }
    // x1, y2 -> indX1, y2
    ctx.moveTo(offsetX1, offsetY2);
    ctx.lineTo(offsetIndX1, offsetY2);
    // indX2, y2 -> x2, y2
    ctx.moveTo(offsetIndX2, offsetY2);
    ctx.lineTo(offsetX2, offsetY2);
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

  const setInputW = (value: number) => String(value || 0).length + 2 + "ch";

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
    localStorage.setItem("isochrone quantity", "" + resource);
  }
  $: share =
    ((threshold ? Math.ceil(yPercentage) : yPercentage) / 100) * resource;
  $: threshold
    ? localStorage.removeItem("isochrone threshold")
    : localStorage.setItem("isochrone threshold", "-1");

  $: if (inputPopulation) inputPopulation.style.width = setInputW(population);
  $: if (inputIndividual) inputIndividual.style.width = setInputW(individual);
  $: if (inputResource) inputResource.style.width = setInputW(resource);

  const radius = 100;

  const x1 = 1,
    y1 = 1;
  const x2 = radius * Math.PI,
    y2 = radius * 2;

  const canvasW = x1 * 2 + x2,
    canvasH = y1 * 2 + y2;

  let xPercentage = 0,
    yPercentage = 0;

  let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null;

  let population = +(localStorage.getItem("isochrone population") || 10),
    individual = +(localStorage.getItem("isochrone individual") || 1),
    resource = +(localStorage.getItem("isochrone quantity") || 1000000),
    threshold = localStorage.getItem("isochrone threshold") !== "-1";

  let inputPopulation: HTMLInputElement,
    inputIndividual: HTMLInputElement,
    inputResource: HTMLInputElement;

  selectColorScheme.subscribe(() => {
    draw(ctx, population, individual);
  });
</script>

<form>
  <canvas bind:this={canvas}></canvas>
  <br />
  <label>
    The amount for the current transaction $<input
      bind:this={inputResource}
      type="number"
      bind:value={resource}
    />
  </label>
  <br />
  <label>
    Total number of people who will share the amount
    <input bind:this={inputPopulation} bind:value={population} type="number" />
  </label>
  <br />
  <label>
    Threshold $1
    <input type="checkbox" bind:checked={threshold} />
  </label>
  <br />
  <label>
    The share for the person at index
    <input bind:this={inputIndividual} bind:value={individual} type="number" />
  </label>
  = <b>${threshold ? Math.ceil(share) : share}</b>
</form>

<style>
  input {
    min-width: 3ch;
  }
</style>
