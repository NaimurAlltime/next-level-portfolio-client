import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { ISkill } from "@/types";
import { useGetSkillQuery } from "@/redux/api/skill";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[]) {
  return {};
}

interface IMultiSelectProps {
  setTechnologies: React.Dispatch<React.SetStateAction<ISkill[]>>;
}

export default function MultiSelect({ setTechnologies }: IMultiSelectProps) {
  const { data, isLoading } = useGetSkillQuery(undefined);
  const theme = useTheme();
  const [ids, setIDs] = React.useState<string[]>([]);

  React.useEffect(() => {
    const t: ISkill[] = [];

    data?.data?.map((tech: ISkill) => {
      if (ids.includes(tech.name)) {
        const { _id, name, icon } = tech;
        t.push({ _id, name, icon });
      }
    });

    setTechnologies(t);
  }, [ids.length]);

  if (isLoading) return;

  const names = data?.data?.map((tech: ISkill) => tech.name);
  // console.log(techNames);

  const handleChange = (event: SelectChangeEvent<typeof ids>) => {
    const {
      target: { value },
    } = event;
    console.log({ value });
    setIDs(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel
        id="demo-multiple-chip-label"
        sx={{ m: 0, p: 0 }}
        color="secondary"
      >
        Select Technology
      </InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        label="Select Technology"
        fullWidth
        value={ids}
        size="small"
        color="secondary"
        onChange={handleChange}
        // input={
        //   <OutlinedInput id='select-multiple-chip' color='secondary' label='Select Technology' />
        // }
        renderValue={(selected) => (
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, width: "100%" }}
          >
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name: string) => (
          <MenuItem key={name} value={name} style={getStyles(name, ids)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
