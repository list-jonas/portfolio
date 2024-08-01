import Logo from '@/components/nav/logo';
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
      }}>
        <div tw="flex justify-center items-center">
          <Logo height={200} width={200} />
        </div>
        <div tw="flex text-5xl font-bold">
          <b>Jonas List Portfolio</b>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}