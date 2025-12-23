// import React from 'react'

// const Home = () => {
//   return (
//     <div className="flex h-screen w-screen animate-pulse items-center justify-center text-5xl font-black text-blue-700">
//       Texavision 2k26
//     </div>
//   )
// }

// export default Home

export default function TypographyTest() {
  return (
    <main className="px-6 py-12">
      <article className="prose mx-auto">
        <h1>Heading Level 1</h1>
        <p>
          This is a paragraph of body text used to test the default typography styles. It should
          have comfortable line height and not stretch too wide on large screens.
        </p>

        <h2>Heading Level 2</h2>
        <p>
          Here is another paragraph with a <a href="#">simple link</a> inside the text to test link
          color, underline, and hover behavior.
        </p>

        <h3>Heading Level 3</h3>
        <p>
          Paragraphs should have consistent spacing below them and align nicely with headings above.
        </p>

        <h4>Lists</h4>

        <p>Unordered list:</p>
        <ul>
          <li>First unordered item</li>
          <li>Second unordered item</li>
          <li>Third unordered item</li>
        </ul>

        <p>Ordered list:</p>
        <ol>
          <li>First ordered item</li>
          <li>Second ordered item</li>
          <li>Third ordered item</li>
        </ol>

        <h5>Heading Level 5</h5>
        <p>This paragraph exists to test smaller headings and how text flows beneath them.</p>

        <h6>Heading Level 6</h6>
        <p>
          Final paragraph to verify spacing, font size, and readability across all text elements.
        </p>
      </article>
    </main>
  );
}
