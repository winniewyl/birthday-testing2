import React, { useState } from 'react';
import Video from './Video';
import GiftBox from './GiftBox';
import Envelope from './Envelope';
import Letter from './Letter';
import Photo from './Photo';
import TV from './TV';

const Gifts = () => {
  const [BoxIsClosed, setBoxIsClosed] = useState(true);
  const [EnvelopedIsClosed, setEnvelopeIsClosed] = useState(true);
  const [TVIsClosed, setTVIsClosed] = useState(true);

  const handleBox = () => {
    setBoxIsClosed(false);
  };

  const handlePhoto = () => {
    setBoxIsClosed(true);
  };

  const handleEnvelope = () => {
    setEnvelopeIsClosed(false);
  };

  const handleLetter = () => {
    setEnvelopeIsClosed(true);
  };

  const handleTV = () => {
    setTVIsClosed(false);
  };

  const handleVideo = () => {
    setTVIsClosed(true);
  };

  return (
    <div>
      {BoxIsClosed === true ? (
        <GiftBox onClick={handleBox} />
      ) : (
        <Photo onClick={handlePhoto} />
      )}
      {EnvelopedIsClosed === true ? (
        <Envelope onClick={handleEnvelope} />
      ) : (
        <Letter onClick={handleLetter} />
      )}
      {TVIsClosed === true ? (
        <TV onClick={handleTV} />
      ) : (
        <Video onClick={handleVideo} />
      )}
    </div>
  );
};

export default Gifts;
