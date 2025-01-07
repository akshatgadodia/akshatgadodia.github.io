import React, { useEffect } from 'react';

const MeetPage = () => {
  const [meetLink, setMeetLink] = useState("https://meet.google.com/bbq-duhd-cvg");

    useEffect(() => {
        window.location.href = meetLink;
    }, []);

    return (
        <div>
            <h1>Redirecting to Google Meet...</h1>
            <p>If you are not redirected, <a href={meetLink} target="_blank" rel="noopener noreferrer">click here</a>.</p>
        </div>
    );
};

export default MeetPage;
