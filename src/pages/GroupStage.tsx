import { Box } from "@chakra-ui/react";
import React from "react";
import Group from "../components/Group";

const GroupStage: React.FC = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
    </Box>
  );
};

export default GroupStage;
