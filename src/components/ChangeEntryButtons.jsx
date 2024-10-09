import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrashX } from "@tabler/icons-react";

export default function ChangeEntryButtons({
  openForm,
  findPreviousEntry,
  entryKey,
}) {
  const handleEditEntry = () => {
    findPreviousEntry(entryKey);
    openForm();
  };

  return (
    <div className="icons">
      <ActionIcon
        variant="transparent"
        color="gray"
        size="lg"
        aria-label="Edit"
        onClick={handleEditEntry}
      >
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
}
