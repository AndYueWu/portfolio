// @ts-nocheck
import React, { useState, useEffect, useId, useRef } from "react";

type Props = {
  text1?: string;
  text2?: string;
  gap?: number;
  fontSize?: number;
  smallR?: number;
  bigR?: number;
  pad?: number;
  letterSpacing?: number;
  colorAndy?: string;
  colorYueWu?: string;
  colorBg?: string;
  hoverLift?: number;
  hoverRadius?: number;
  scanSpeed?: number;
  scanWidth?: number;
};

export default function DualColorDotMatrix({
  text1 = "Andy",
  text2 = "Yue Wu",
  gap = 7,
  fontSize = 110,
  smallR = 0.6,
  bigR = 2.8,
  pad = 4,
  letterSpacing = 6,
  colorAndy = "#d4573b",
  colorYueWu = "#2f9db9",
  colorBg = "#0b1020",
  hoverLift = 10,
  hoverRadius = 0,
  scanSpeed = 0.8,
  scanWidth = 15,
}: Props) {
  const uid = useId();
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [dots, setDots] = useState([]);
  const [meta, setMeta] = useState({ w: 0, h: 0, cols: 0, rows: 0 });
  const [hoverCell, setHoverCell] = useState<{ c: number; r: number } | null>(null);
  const [scanPos, setScanPos] = useState(-20);
  const [isMobile, setIsMobile] = useState(false);

  const fontFamily = "'JetBrains Mono', monospace";

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. 生成点阵数据
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `800 ${fontSize}px ${fontFamily}`;
    const w1 = ctx.measureText(text1).width + text1.length * letterSpacing;
    const spaceWidth = ctx.measureText(" ").width + letterSpacing;
    const w2 = ctx.measureText(text2).width + text2.length * letterSpacing;
    const totalTextWidth = w1 + spaceWidth + w2;
    const textHeight = fontSize;

    const cols = Math.ceil(totalTextWidth / gap) + pad * 2;
    const rows = Math.ceil(textHeight / gap) + pad * 2;
    const w = cols * gap;
    const h = rows * gap;

    canvas.width = w;
    canvas.height = h;

    ctx.font = `800 ${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";

    const startX = (w - totalTextWidth) / 2;
    const centerY = h / 2;
    const splitX = startX + w1 + spaceWidth / 2;

    ctx.fillText(`${text1} ${text2}`, startX, centerY);

    const imgData = ctx.getImageData(0, 0, w, h).data;
    const newDots = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * gap + gap / 2;
        const y = r * gap + gap / 2;
        const px = Math.floor(x);
        const py = Math.floor(y);
        const alpha = imgData[(py * w + px) * 4 + 3];
        const isBig = alpha > 120;

        let dotColor = colorBg;
        if (isBig) {
          dotColor = x < splitX ? colorAndy : colorYueWu;
        }

        newDots.push({ x, y, isBig, color: dotColor, c, r });
      }
    }

    setDots(newDots);
    setMeta({ w, h, cols, rows });
  }, [text1, text2, gap, fontSize, letterSpacing, colorAndy, colorYueWu, colorBg]);

  // 2. 桌面端才运行扫描动画
  useEffect(() => {
    if (isMobile) return;

    let frameId: number;
    const loop = () => {
      setScanPos((prev) => {
        const limit = meta.cols > 0 ? meta.cols + scanWidth * 2 : 100;
        if (prev > limit) return -scanWidth * 3;
        return prev + scanSpeed;
      });
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [meta.cols, scanSpeed, scanWidth, isMobile]);

  // 3. 事件处理函数
  const clientToSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    return pt.matrixTransform(ctm.inverse());
  };

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isMobile) return;
    if (!meta.cols || !meta.rows) return;

    const p = clientToSvg(e.clientX, e.clientY);
    if (!p) return;

    const c = Math.round((p.x - gap / 2) / gap);
    const r = Math.round((p.y - gap / 2) / gap);

    setHoverCell({
      c: Math.max(0, Math.min(meta.cols - 1, c)),
      r: Math.max(0, Math.min(meta.rows - 1, r)),
    });
  };

  const onLeave = () => {
    if (isMobile) return;
    setHoverCell(null);
  };

  // 4. 计算最终位移
  const getTransform = (c: number, r: number) => {
    let hLift = 0;
    if (!isMobile && hoverCell) {
      const d = Math.max(Math.abs(c - hoverCell.c), Math.abs(r - hoverCell.r));
      if (d === 0) hLift = hoverLift;
      else if (hoverRadius > 0 && d <= hoverRadius) {
        hLift = hoverLift * ((hoverRadius + 1 - d) / (hoverRadius + 1)) * 0.65;
      }
    }

    let sLift = 0;
    if (!isMobile) {
      const dist = Math.abs(c - scanPos);
      if (dist < scanWidth) {
        const strength = Math.cos((dist / scanWidth) * (Math.PI / 2));
        sLift = Math.pow(strength, 2) * 10;
      }
    }

    const totalY = -(hLift + sLift);
    return totalY !== 0 ? `translate(0 ${totalY})` : undefined;
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${meta.w} ${meta.h}`}
      style={{ width: "100%", height: "auto", touchAction: "none" }}
      onPointerMove={isMobile ? undefined : onMove}
      onPointerLeave={isMobile ? undefined : onLeave}
    >
      {dots.map((dot, i) => (
        <circle
          key={`${uid}-${i}`}
          cx={dot.x}
          cy={dot.y}
          r={dot.isBig ? bigR : smallR}
          fill={dot.color}
          fillOpacity={dot.isBig ? 1 : 0.2}
          transform={getTransform(dot.c, dot.r)}
          style={{
            transition: !isMobile && hoverCell ? "transform 150ms ease-out" : "none",
            willChange: !isMobile ? "transform" : "auto",
          }}
        />
      ))}
    </svg>
  );
}