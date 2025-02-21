import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface SearchFieldProps {
  placeholder: string;
  size?: "small" | "medium";
  handleSearch: Function;
}

const SearchField = ({ placeholder, size, handleSearch }: SearchFieldProps) => {
  const [value, setValue] = useState('');

  const handleKeyEvents = (e: any) => {
    if (e.key === "Enter" && value !== '') {
      searchHandler();
    }
  };

  const searchHandler = () => {
  handleSearch(value);
    setValue('');
  }

  return (
    <TextField
      fullWidth
      size={size}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      placeholder={placeholder}
      onKeyDown={handleKeyEvents}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => value !== '' && searchHandler()}>
              <SearchIcon />
            </IconButton>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused": {
          borderColor: "#72BF78", // Change the border color when focused
          "& fieldset": {
            borderColor: "#72BF78", // Change the fieldset (outline) color when focused
          },
        },
        "&:hover .MuiInputBase-root": {
          borderColor: "#72BF78", // Change the border color when hovered
        },
        "& .MuiInputBase-root": {
          color: "#000", // Default text color (black)
        },
        "& .MuiSelect-icon": {
          color: "#72BF78", // Change dropdown icon color on hover/focus
        },
      }}
    />
  );
};

export default SearchField;
