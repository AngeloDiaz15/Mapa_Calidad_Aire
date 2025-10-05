// extraer_timestamps_tempo.js
async function generarTimestampsTEMPO() {
  const url = "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/1.0.0/WMTSCapabilities.xml";
  const res = await fetch(url);
  const text = await res.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");

  const capasTempo = [
    "Formaldehyde (L2, Vertical Column, Subdaily, TEMPO)",
    "Ozone (L2, Total Column, Subdaily, TEMPO)",
    "Ozone Profile (L2, Total Column, Subdaily, TEMPO)",
    "Nitrogen Dioxide (L2, Vertical Column, Subdaily, TEMPO)",
    "Sulfur Dioxide (L2, Vertical Column, Subdaily, TEMPO)",
    "Aerosol Index (L2, Subdaily, TEMPO)",
    "Aerosol Optical Depth (L2, Subdaily, TEMPO)",
    "Carbon Monoxide (L2, Total Column, Subdaily, TEMPO)"
  ];

  const resultados = {};

  capasTempo.forEach(nombre => resultados[nombre] = []);

  // Recorremos todas las capas del XML
  xml.querySelectorAll("Layer").forEach(layer => {
    const title = layer.querySelector("ows\\:Title")?.textContent?.trim();

    if (capasTempo.includes(title)) {
      const valores = [];
      layer.querySelectorAll("Dimension").forEach(dim => {
        if (dim.querySelector("ows\\:Identifier")?.textContent === "Time") {
          dim.querySelectorAll("Value").forEach(v => {
            // Extrae todos los timestamps ISO dentro del texto
            const matches = v.textContent.matchAll(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/g);
            for (const m of matches) valores.push(m[0]);
          });
        }
      });
      resultados[title] = [...new Set(valores)].sort();
    }
  });

  console.log("✅ Timestamps extraídos:");
  console.log(resultados);

  // Guarda el resultado como archivo JSON (en navegador o Node)
  const jsonData = JSON.stringify(resultados, null, 2);

  // Si estás en navegador:
  const blob = new Blob([jsonData], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tempo_timestamps.json";
  link.click();
}

generarTimestampsTEMPO();