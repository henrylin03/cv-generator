import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrashX } from "@tabler/icons-react";

const ChangeEntryButtons = () => (
  <div className="icons">
    <ActionIcon variant="transparent" color="gray" size="lg" aria-label="Edit">
      <IconPencil style={{ width: "70%", height: "70%" }} />
    </ActionIcon>
    <ActionIcon
      variant="transparent"
      color="gray"
      size="lg"
      aria-label="Delete"
    >
      <IconTrashX style={{ width: "70%", height: "70%" }} />
    </ActionIcon>
  </div>
);

export default ChangeEntryButtons;
