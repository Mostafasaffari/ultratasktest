import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from "../../ui-kit/icons";

import { TextField, Checkbox, Autocomplete } from "../../ui-kit/input";

interface IProps {
  options: any[];
  multiple: boolean;
  id: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}
const SelectItems: React.FC<IProps> = ({
  id,
  multiple,
  options,
  onChange,
  value,
}) => {
  return (
    <Autocomplete
      multiple={multiple}
      id={id}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      value={value}
      onChange={onChange}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="columns"
          placeholder="Select columns"
        />
      )}
    />
  );
};

export { SelectItems };
