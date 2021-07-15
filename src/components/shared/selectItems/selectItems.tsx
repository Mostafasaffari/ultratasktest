import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from "../../ui-kit/icons";

import { TextField, Checkbox, Autocomplete } from "../../ui-kit/input";

interface IProps {
  options: any[];
  multiple: boolean;
  placeholder: string;
  label: string;
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
  placeholder,
  label,
}) => {
  return (
    <Autocomplete
      multiple={multiple}
      id={id}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      value={value || null}
      onChange={onChange}
      renderOption={(option, { selected }) => {
        if (multiple) {
          return (
            <>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </>
          );
        } else {
          return (
            <div>
              <span>{option}</span>
            </div>
          );
        }
      }}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export { SelectItems };
