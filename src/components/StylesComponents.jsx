import { List, Box, Checkbox, Typography, Button, styled } from '@mui/material';

export default function StylesComponents() {
  const styledItems = [
    'style prop', // div, checkbox, button
    'system props', // Box, Checkbox, Button
    'sx prop', // Box, Checkbox, Button
    'styled component', // div, checkbox, button
    'tailwind css', // div, checkbox, button
  ];

  const MyComponent = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  const MyStyledDiv = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
  });
  const MyStyledLabel = styled(Box)({ color: 'red' });


  return (
    <List sx={{ width: '70%', margin: '30px auto', bgcolor: 'primary.main' }}>

      {/* style prop */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" name={styledItems[0]} />
          <label
            style={{
              fontSize: '23px',
              color: 'red',
              margin: '0 20px',
            }}
            htmlFor="scales"
          >
            {styledItems[0]}
          </label>
        </div>
        <button
          type="submit"
          style={{
            fontSize: '16px',
            color: 'white',
            backgroundColor: 'purple',
            padding: '5px 15px',
            borderRadius: '5px',
          }}
        >
          EDIT
        </button>
      </div>

      {/* system props */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb={1}
      >
        <Box display="flex" alignItems="center">
          <Checkbox color="secondary" />
          <Typography color="red" variant="h6" gutterBottom component="div">
            {styledItems[1]}
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" ml={2}>
          {/* не работает ml, не получается кнопку переместить в сторону */}
          EDIT
        </Button>
      </Box>

      {/* sx props */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '5px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox color="secondary" />
          <Typography color="white" variant="h6" gutterBottom component="div">
            {styledItems[2]}
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" sx={{ margin: '0 15px' }}>
          EDIT
        </Button>
      </Box>

      {/* styled component */}
      <MyComponent>
        <MyStyledDiv>
          <Checkbox color="secondary" />
          <MyStyledLabel>{styledItems[3]}</MyStyledLabel>
        </MyStyledDiv>
        <Button variant="contained" color="secondary" sx={{ margin: '0 15px' }}>
          EDIT
        </Button>
      </MyComponent>

      {/* tailwind css */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex  ml-4 items-center">
          <input className="" type="checkbox" name="tailwind" />
          <label
            className="text-xl font-medium ml-3 text-white"
            htmlFor="tailwind"
          >
            {styledItems[4]}
          </label>
        </div>
        <button
          className="mr-4 bg-fuchsia-800 px-4 py-1 rounded-md text-white"
          type="submit"
        >
          EDIT
        </button>
      </div>
    </List>
  );
}