import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Stack,
    Typography
} from '@mui/material'
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material'
import { useState } from 'react'
import Page from '../../components/Page'
import AppBar from '../../components/AppBar'



const productsList = [
    {
        name: 'knives metal',
        description: 'Нож Misen Chef’s Knife собрал более 1 миллиона долларов на Kickstarter и покорил поваров всех мастей — от профессиональных поваров до страстных домашних поваров.',
        price: 55,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210128_123026_240x180_crop_center.jpg?v=1612293782'
    },
    {
        name: 'knives stal',
        description: '7-дюймовый нож-тесак Chopper Нож мясника из нержавеющей стали для домашней кухни и ресторана',
        price: 39,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210129_154515_900x.jpg?v=1612293792'
    },
    {
        name: 'knives gold',
        description: 'WE Knife - это производитель профессиональных высококачественных ножей родом из Китая.',
        price: 79,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210205_153038_900x.jpg?v=1612539231'
    },
    {
        name: 'knives bronze',
        description: 'Это поварской нож в традиционном австралийском загородном стиле 19-го века, нож длиной более 360 мм',
        price: 89,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210128_141650_900x.jpg?v=1612293818'
    },
    {
        name: 'knives bronze',
        description: 'Лучший в целом: Mac Mighty Professional Hollow Edge Knife. Сверхострое лезвие и нескользящая рукоять делают этот нож лучшим выбором в целом.',
        price: 48.5,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210119_151539_900x.jpg?v=1611094614'
    },
    {
        name: 'knives bronze',
        description: 'Длинный и тонкий разделочный нож — тонкий и длинный, чтобы лезвие меньше проходило через бескостные куски мяса или овощей, что помогает избежать разрывов и обеспечивает более чистый срез в целом.',
        price: 97.3,
        image: 'https://cdn.shopify.com/s/files/1/0020/2853/5874/products/IMG_20210131_110955_900x.jpg?v=1612293749'
    },

]


function OrderAction() {
    const [count, setCount] = useState(0)

    return (
        <Box ml="auto">
            {count === 0 && (
                <Button variant='contained' onClick={() => setCount(c => c + 1)}>
                    заказать
                </Button>
            )}
            {count > 0 && (
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setCount(c => c - 1)}>-</Button>
                    <Button>{count}</Button>
                    <Button onClick={() => setCount(c => c + 1)}>+</Button>
                </ButtonGroup>
            )}
        </Box>
    )
}


export default function ProductsPage() {

    return (
        <Page>
            <AppBar tittle='НОЖИ - (Япона-мать)' />
            <Box
                sx={{
                    p: 2,
                    display: 'grid',
                    gap: 2,
                    width: 1,
                    height: 1,
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(6, 1fr)",
                    },
                }}
            >
                {productsList.map((item) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant="body2" color="textSecondary" >
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold' }} >
                                    {item.price}$
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="textSecondary" >
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <OrderAction />
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Page >
    )


}