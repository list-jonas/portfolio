import Logo from "@/components/nav/logo";
import { ImageResponse } from "next/og";

export async function GET(req) {
  // Parse the search params from the request URL
  const { searchParams } = new URL(req.url);
  const isDarkMode = searchParams.get("color") === "dark";

  // Define light and dark mode styles
  const backgroundColor = isDarkMode ? "#131415" : "white";
  const textColor = isDarkMode ? "white" : "#131415";
  const backgroundImage = isDarkMode
    ? "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)"
    : "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor,
          backgroundImage,
          backgroundSize: "100px 100px",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: textColor,
          }}
        >
          <Logo height={320} width={320} color={textColor} />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "20px",
            marginLeft: "auto",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "5em",
                color: textColor,
              }}
            >
              Hi, I&apos;m Jonas List
            </h1>
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "1.5em",
                color: textColor,
              }}
            >
              A full-stack developer from Austria.
            </p>
          </div>
          <p style={{ marginTop: "auto", fontSize: "2em", color: textColor }}>
            HTBLA Kaindorf
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
