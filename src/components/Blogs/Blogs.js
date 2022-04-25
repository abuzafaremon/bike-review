import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='qna-container'>
      <div className='qna'>
        <h2>What is Context API?</h2>
        <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </p>
      </div>
      <div className='qna'>
        <h2>What is Semantic Tag?</h2>
        <p>Ans: Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <b>P</b> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.Using semantic tags gives you many more hooks for styling your content, too. Perhaps today you prefer to have your code samples display in the default browser style, but tomorrow, you might want to call them out with a gray background color; later still, you might want to define the precise mono-spaced font family or font stack to use for your samples. You can do all of these things easily by using semantic markup and smartly applied CSS.</p>
      </div>
      <div className='qna'>
        <h2>Inline vs Inline-Block element...</h2>
        <p>Ans: Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are.
          Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn't sit next to other elements.</p>
      </div>
    </div>
  );
};

export default Blogs;