import './globals.css';
import fonts from './font';
import SmoothScrolling from '@/wrappers/SmoothScrolling';
import Footer from '@/components/shared/footer/Footer';

export const metadata = {
  title: 'Texavision-2k26',
  description:
    'Texavision-2k26 - Official web application for the Texavision 2k26 event and related activities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fonts.centrion.variable} ${fonts.drunkMillionaire.variable} ${fonts.gillianJoe.variable} ${fonts.grindyBrush.variable} ${fonts.sprayPaintDemo.variable} ${fonts.medievalSharp.variable} ${fonts.protestRevolution.variable} ${fonts.nosifer.variable} ${fonts.rubikDoodleShadow.variable} ${fonts.rubikGlitchPop.variable} ${fonts.rubikWetPaint.variable} ${fonts.rubikMarkerHatch.variable} ${fonts.rubikMaps.variable} antialiased`}
      >
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
