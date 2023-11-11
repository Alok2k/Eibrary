import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./preview.css";
import Example from "./popup";

function HarryPotter2Preview() {
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
          <h1>Harry Potter and the Chamber of Secrets</h1>
          <p>Author: J.K. Rowling</p>
          <p>Category: Fantasy</p>
          <p>Published: June 26, 1997</p>
          <p>Points: 500</p>
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
          <h1>Harry Potter and the Chamber of Secrets</h1>
          <div className="content">
            <p>
              "Harry Potter and the Chamber of Secrets," the second book in the
              Harry Potter series by J.K. Rowling, continues the magical
              adventures of Harry Potter and his friends at Hogwarts School of
              Witchcraft and Wizardry. Here's a summary of the plot: The story
              begins during the summer break when Harry is still living with the
              Dursleys. He receives a warning from Dobby, a house-elf, that
              returning to Hogwarts will put him in grave danger. Dobby's
              interference results in Harry's subsequent imprisonment in his
              room. Fortunately, Ron, Fred, and George Weasley rescue him in a
              flying car and take him to the Burrow, their home. Once at
              Hogwarts, strange events start occurring. Students and a cat named
              Mrs. Norris are found petrified, seemingly paralyzed and with a
              look of terror on their faces. The rumor of a monster known as the
              "Chamber of Secrets" being opened again starts circulating. The
              legend goes that the Chamber can only be opened by the heir of
              Salazar Slytherin and that it houses a deadly creature that can
              purify the school by eliminating Muggle-borns (wizards and witches
              with non-magical parents). Harry, Ron, and Hermione become
              determined to solve the mystery of the Chamber and clear Hagrid's
              name, who is wrongly accused of being involved. They discover that
              Tom Riddle, a student from the past, has left behind a diary that
              contains a piece of Voldemort's soul. This diary can possess and
              control individuals. As the trio investigates, they learn more
              about the history of the Chamber and the fact that it was opened
              once before by Tom Riddle. Harry also hears a mysterious voice
              that no one else can hear, leading him to believe he might be
              connected to the Chamber's secrets. The climax of the story takes
              place in the Chamber itself, where Harry confronts a young,
              memory-preserving manifestation of Tom Riddle and the deadly
              creature known as the Basilisk, a giant serpent. With the help of
              Fawkes, Dumbledore's phoenix, and the Sorting Hat, Harry defeats
              the Basilisk and destroys the diary, which was anchoring the
              manifestation of Tom Riddle. Harry saves Ginny Weasley, Ron's
              younger sister, who had been possessed by the diary and used to
              open the Chamber. The school is saved, and the true villain behind
              the attacks is revealed to be Tom Riddle's memory, not Hagrid or
              anyone else. The book ends with Dobby being freed from servitude
              to the Malfoy family when Harry tricks Lucius Malfoy into giving
              the house-elf a sock. Harry returns to the Dursleys for the
              summer, with the knowledge that he'll be returning to Hogwarts for
              his third year. "Harry Potter and the Chamber of Secrets" delves
              deeper into the history of Hogwarts and the dark past of Tom
              Riddle, while continuing to explore themes of friendship, bravery,
              and the battle against dark forces in the wizarding world.
            </p>
          </div>
        </div>
      </div>
      <Example show={show} handleClose={handleClose}/>
    </div>
  );
}
export default HarryPotter2Preview;
