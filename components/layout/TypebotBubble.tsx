"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Bubble component to avoid SSR issues
const Bubble: any = dynamic(
  () => import("@typebot.io/react").then((mod) => mod.Bubble),
  { ssr: false }
);

export default function TypebotBubble() {
  return (
    <Bubble
      typebot="airizz"
      apiHost="https://typebot.io"
      previewMessage={{ message: "Inquire Anything!", autoShowDelay: 10 }}
      theme={{ button: { backgroundColor: "#00b8ac" } }}
    />
  );
}
