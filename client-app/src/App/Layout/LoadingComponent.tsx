import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = ({ inverted = true, content }) => {
  return (
    <Dimmer
      active
      inverted
      style={{
        backgroundColor: "rgb(245, 247, 250)",
        boxShadow: "none",
      }}
    >
      <Loader content={content} />
    </Dimmer>
  );
};
