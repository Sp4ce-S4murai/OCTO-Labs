import { site } from "@/lib/content";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: "#0a1d1d",
        backgroundImage:
          "radial-gradient(circle at 82% 8%, #2f8686 0%, rgba(10,29,29,0) 55%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            backgroundColor: "#1f5757",
            color: "#ffffff",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          OP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "34px", fontWeight: 700, color: "#ffffff" }}>
            {site.brand}
          </span>
          <span style={{ fontSize: "20px", color: "#78c0c0" }}>
            by {site.parentBrand}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
        <span
          style={{
            fontSize: "58px",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          Pare de perder paciente por falta de uma página profissional
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            padding: "14px 28px",
            borderRadius: "999px",
            backgroundColor: "#f9591f",
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          {site.tagline}
        </div>
      </div>
    </div>
  );
}
