import { Li, Ul } from "./VideoList.styled";

export const VideoList = ({ videos, onSelect }) => {
  return (
    <Ul>
      {videos.map(video => (
        <Li key={video.id} onClick={() => onSelect(video.link)}>
          {video.link}
        </Li>
      ))}
    </Ul>
  );
};