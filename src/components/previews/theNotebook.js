import React, { useState } from 'react'
import "./preview.css";
import Sidebar from '../Sidebar';
import Example from './popup';
function TheNotebook() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        
        <div className="preview-container">
            
            <div className='upperblock'>
        <div className="book-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhcYRDJKOtQRCWI3-FxSN3-8o3Id-cMbHwA&usqp=CAU"
            alt="Harry Potter and the Sorcerer's Stone"
          />
        
        </div>
          <div className="book-details">
          <h1>The Notebook</h1>
        <p>Author: Nicholas Sparks</p>
        <p>Category: Romance</p>
        <p>Published: October 1, 1996</p>
        <p>Points: 300</p>
        <p>Description:</p>

            <p>
            "The Notebook" is a heartwarming romance novel that tells the story
          of Noah and Allie, two young lovers separated by class and societal
          expectations. Their love story spans decades and is a tale of
          enduring love and devotion.

            </p>
            <button type="button" class="btn btn-primary" onClick={handleShow}>
            Refer
          </button>
            </div>
          </div>
          <div className='plot'>
            <div className='heading'> <h1>The Notebook</h1>
            <div className='content'>
            <p>A man with a faded, well-worn notebook open in his lap. A woman experiencing a morning ritual she doesn’t understand. Until he begins to read to her.  The Notebook is an achingly tender story about the enduring power of love, a story of miracles that will stay with you forever. Set amid the austere beauty of coastal North Carolina in 1946, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II. Noah, thirty-one, is restoring a plantation home to its former glory, and he is haunted by images of the beautiful girl he met fourteen years earlier, a girl he loved like no other. Unable to find her, yet unwilling to forget the summer they spent together, Noah is content to live with only memories. . . until she unexpectedly returns to his town to see him once again. Allie Nelson, twenty-nine, is now engaged to another man, but realizes that the original passion she felt for Noah has not dimmed with the passage of time. Still, the obstacles that once ended their previous relationship remain, and the gulf between their worlds is too vast to ignore. With her impending marriage only weeks away, Allie is forced to confront her hopes and dreams for the future, a future that only she can shape. Like a puzzle within a puzzle, the story of Noah and Allie is just beginning. As it unfolds, their tale miraculously becomes something different, with much higher stakes. The result is a deeply moving portrait of love itself, the tender moments, and fundamental changes that affect us all. Shining with a beauty that is rarely found in current literature, The Notebookestablishes Nicholas Sparks as a classic storyteller with a unique insight into the only emotion that really matters.</p>
            </div>
            </div>
            <Example show={show} handleClose={handleClose}/>
          </div>
          
        </div>
      );
    }

export default TheNotebook