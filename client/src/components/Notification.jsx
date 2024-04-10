import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import useFetchNotes from "../hooks/useFetchNotes";
import moment from "moment";

const Notification = () => {
  const { notes, loading, error } = useFetchNotes();

  const [updatedDate, setUpdatedDate] = useState("");
  const [note, setNote] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState(false);

  useEffect(() => {
    if (notes && notes.length > 0) {
      console.log("Notes fetched successfully:", notes);
      setUpdatedDate(moment(notes[0].updatedAt).format("MMMM Do YYYY"));
      setNote(notes[0].note);
      setButtonDisplay(notes[0].buttonDisplay);
    } else {
      setUpdatedDate(moment().format("MMMM Do YYYY"));
      setNote("No notes available.");
      setButtonDisplay(false);
    }
  }, [notes]);

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p>No notes.</p>;

  return (
    <div className="bg-bgWhite text-black py-3 px-6 text-lg w-3/4 border">
      <div className="flex gap-4">
        <div className="bg-customRed text-sm text-white px-2 py-0 rounded font-medium">
          NOTE IMPORTANT!
        </div>
        <div className="text-sm">{updatedDate}</div>
      </div>

      <div className="w-full text-start text-xl font-monomaniac text-customRed pt-4 scroll-text">
        <span className="scroll-animation-lg whitespace-pre-line">
          {" "}
          <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
          {note}
        </span>
      </div>
      <div className="flex justify-end pt-4">
        {buttonDisplay && (
          <Link
            to="/registration"
            className="bg-customRed text-white text-base font-medium rounded px-2 py-1 hover:font-bold hover:bg-customBlue"
          >
            Register now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Notification;
