import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const Waiver = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon icon={faVolleyballBall} className="text-customRed" />
        <h2 className="text-xl lg:text-2xl font-medium">
          ASSUMPTION OF RISK AND WAIVER OF LIABILITY:
        </h2>
      </div>
      <div className="text-sm lg:text-base h-48 text-justify overflow-y-scroll border border-black p-4">
        <p>
          I/We the undersigned hereby certify that I (we) am (are) the parent(s)
          or legal guardian(s) of the participating child(ren). In consideration
          of participating in Dynamique Volleyball training, I (we) represent
          that I(we) understand the nature of these activities and that I (my
          child) am qualified, in good health, and in proper physical condition
          to participate in such training. I (We) acknowledge that if I (we)
          believe event conditions are unsafe; I(we) will immediately
          discontinue participation in the training.
        </p>
        <br />
        <p>
          I (we) fully understand that the volleyball training involve risks of
          serious bodily injury, including permanent disability, paralysis and
          death, which may be caused by the participating child(ren) ’s own
          actions, or inactions, those of others participating in the event, the
          conditions in which the event takes place, and that there may be other
          risks either not known to me or not readily foreseeable at this time;
          and I (we) fully accept and assume all such risks and all
          responsibility for losses, costs, and damages incurred as a result of
          my child(ren)’s participation in the training.
        </p>
        <br />
        <p>
          I (We) hereby unconditionally release, discharge, and covenant not to
          sue all organizers of Dynamique Volleyball training including its
          owner, its coaches, sports facility, and the respective
          administrators, directors, volunteers, employees, other participants,
          any sponsors, advertisers, and, if applicable, other owners and
          lessors of premises on which the training takes place, from all
          liability, claims, demands, losses, or damages on my account caused or
          alleged to be caused in whole or in part by the negligence of the
          participating child(ren). or otherwise, including negligent rescue
          operations; and I (we) further agree that if, despite this RELEASE AND
          WAIVER OF LIABILITY, ASSUMPTION OF RISK, AND INDEMNITY AGREEMENT, I
          (we), or anyone on our behalf, makes a claim against any of the
          participating child(ren) , I (we) will indemnify, save, and hold
          harmless each of the participating child(ren) from any loss,
          liability, damage, or cost which any may incur as the result of such
          claim.
        </p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          name="waiver"
          required
          className="mr-2"
        />
        <label className="flex items-center text-sm lg:text-base">
          By checking, I acknowledge and agree to the above-stated terms and
          conditions.
        </label>
      </div>
    </div>
  );
};

export default Waiver;
