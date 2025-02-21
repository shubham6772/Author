import { MenuItem, Select, SelectChangeEvent, FormControl, InputLabel } from "@mui/material";
import "./SelectBox.scss";

interface SelectBoxProps {
    options: Array<any>;
    onChange: (event: SelectChangeEvent<unknown>) => void;
    title: string;
    selectedText: string;
}

const SelectBox = ({ title, selectedText, options, onChange }: SelectBoxProps) => {
    return (
        <div>
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 220,
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& fieldset": {
                            borderColor: "#72BF78", // Focused border color
                        },
                    },
                }}
                size="small"
            >
                <InputLabel
                    id="demo-select-small-label"
                    sx={{
                        color: "#000", // Default title color (black)
                        "&.Mui-focused": {
                            color: "#72BF78", // Focused title color
                        },
                    }}
                >
                    {title}
                </InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedText}
                    label={title}
                    onChange={onChange}
                    
                >
                    {options.map(({ value, label }, index) => (
                        <MenuItem key={index} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectBox;