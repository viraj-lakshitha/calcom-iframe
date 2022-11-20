import Cal from "@calcom/embed-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CalcomIframe = () => {
  const [queryParams] = useSearchParams();
  const [meetingLink, setMeetingLink] = useState("");

  useEffect(() => {
    setMeetingLink(queryParams.get("meeting"));
  }, []);

  return (
    <>
      {meetingLink && (
        <Cal
          calLink={meetingLink} // this link should get from query params (friend's username/event-type name)
          config={{
            name: "Viraj Lakshitha Bandara", // new comer's name
            email: "virajlakshithabandara@gmail.com", // new comer's email
            notes: "Sample Meeting", // This should be dynamic (Platform Name - Meeting with ${friend`s_name})
            theme: 'dark' // Optional param
        }}
        />
      )}
    </>
  );
};

export default CalcomIframe;
