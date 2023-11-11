import React, { useState } from "react";
import "./preview.css";
import Example from "./popup";

function Harrypotterandthesorcerersstone() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6FMUhBLlRCELbXU--5lBrQXeGQU1unDznA&usqp=CAU"
            alt="Harry Potter and the Sorcerer's Stone"
          />
        </div>
        <div className="book-details">
          <h1>Harry Potter and the Sorcerer's Stone</h1>
          <p>Author: J.K. Rowling</p>
          <p>Category: Fantasy</p>
          <p>Published: June 26, 1997</p>
          <p>Points: 200</p>
          <p>Description:</p>

          <p>
            "Harry Potter and the Sorcerer's Stone" is the first book in the
            beloved Harry Potter series. Follow the young wizard, Harry Potter,
            as he discovers his magical abilities and embarks on a magical
            adventure at Hogwarts School of Witchcraft and Wizardry.
          </p>
          <button type="button" class="btn btn-primary" onClick={handleShow}>
            Refer
          </button>
        </div>
      </div>
      <div className="plot">
        <div className="heading">
          {" "}
          <h1>Harry Potter and the Sorcerer's Stone</h1>
          <div className="content">
            <p>
              The plot of "Harry Potter and the Sorcerer's Stone," the first
              book in the Harry Potter series by J.K. Rowling, revolves around a
              young boy named Harry Potter who discovers his identity as a
              wizard and begins his journey into the world of magic. Here's a
              brief summary of the plot: The story begins with Harry Potter, an
              orphaned boy, living with his cruel aunt, uncle, and cousin, the
              Dursleys, who mistreat him and keep him in a cupboard under the
              stairs. On his eleventh birthday, Harry receives a letter
              delivered by a series of unusual messengers, inviting him to
              attend Hogwarts School of Witchcraft and Wizardry. This letter
              sets in motion a series of events that change Harry's life
              forever. At Hogwarts, Harry makes friends, including Ron Weasley
              and Hermione Granger. He learns about his parents' mysterious
              deaths and discovers that he is famous in the wizarding world for
              surviving an attack by the dark wizard Voldemort as an infant. The
              lightning bolt scar on his forehead is a constant reminder of this
              event. As the school year progresses, Harry becomes involved in
              various adventures. He discovers the existence of the Sorcerer's
              Stone, a powerful magical object that can grant immortality.
              Harry, Ron, and Hermione uncover a plot to steal the stone,
              leading them on a dangerous quest to protect it from falling into
              the wrong hands. The climax of the story takes place in the
              underground chambers of Hogwarts, where Harry faces Professor
              Quirrell, who is revealed to be working for Voldemort. With the
              help of the Sorcerer's Stone, which is hidden in the Mirror of
              Erised, Harry thwarts Voldemort's attempt to return to power. The
              book concludes with Harry returning to the Dursleys for the
              summer, but he looks forward to returning to Hogwarts in the
              future, where he will continue to learn about magic and his own
              extraordinary destiny. "Harry Potter and the Sorcerer's Stone"
              sets the stage for the epic adventures and challenges that Harry
              will face throughout the series as he confronts the dark forces of
              Voldemort and discovers the true nature of his own magical
              abilities.
            </p>
             

          </div>
        </div>
      </div>
      <Example show={show} handleClose={handleClose}/>
    </div>
  );
}

export default Harrypotterandthesorcerersstone;
