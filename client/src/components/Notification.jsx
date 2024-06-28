import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import useFetchNotes from "../hooks/useFetchNotes";
import moment from "moment";

const Notification = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const { notes, loading, error } = useFetchNotes();

  const isNotesAvailable = notes && notes.length > 0;
  const [firstNote, setFirstNote] = useState("No notes available.");
  const [firstNote_fr, setFirstNote_fr] = useState("No notes available.");
  const [buttonDisplay, setButtonDisplay] = useState(false);

  const displayNote = currentLang === 'fr' ? firstNote_fr : firstNote;


  useEffect(() => {
    if (isNotesAvailable) {
      console.log("Notes fetched successfully:", notes);
      setFirstNote(notes[0].note);
      setFirstNote_fr(notes[0].note_fr);
      setButtonDisplay(notes[0].buttonDisplay);
    }
  }, [notes]);

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p>No notes.</p>;

  return (
    <div className="bg-bgWhite text-black py-3 px-6 text-lg w-3/4 border">
      <div className="flex gap-4">
        <div className="bg-customRed text-sm text-white px-2 py-0 rounded font-medium">
          {t("common.schedule.subtitle")}
        </div>
        <div className="text-sm">{isNotesAvailable ? moment(notes[0].updatedAt).format("MMMM Do YYYY") : ""}</div>
      </div>

      <div className="w-full text-start text-xl font-monomaniac text-customRed pt-4 scroll-text">
        <span className="scroll-animation-lg whitespace-pre-line">
          {" "}
          <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
          {displayNote}
        </span>
      </div>
      <div className="flex justify-end pt-4">
        {buttonDisplay && (
          <Link
            to="/registration"
            className="bg-customRed text-white text-base font-medium rounded px-2 py-1 hover:font-bold hover:bg-customBlue"
          >
            {t("common.schedule.button")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Notification;
