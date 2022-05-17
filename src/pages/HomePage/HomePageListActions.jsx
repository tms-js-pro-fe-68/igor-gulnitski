import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';

export default function HomePageListActions({
    search,
    setSort,
    sort,
    setSaarch
}) {


    return (
        <Box sx={{ p: 2, display: 'grid', gap: 2, gridTemplateColumns: '4fr 2fr' }}>
            <TextField
                inputProps={{
                    startAdorment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={search} onChange={e => setSaarch(e.target.value)} />
            <Button onClick={() => setSort(prevSort => prevSort === 'asc' ? 'desc' : 'asc')}>
                {sort}
            </Button>
        </Box>
    )
}