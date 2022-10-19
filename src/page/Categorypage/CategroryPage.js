
import ProductList from '../../compnent/ProductList'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react'
import { height } from '@mui/system';

export default function CategroryPage() {
    const windowWidth = window.innerWidth
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [sort, setSort] = useState('')
    const handleChangeSize = function (e) {
        setSize(e.target.value)
    }
    const handleChangeColor = function (e) {
        setColor(e.target.value)
    }
    const handleChangeSort = function (e) {
        setSort(e.target.value)
    }
    return (
        <div>
            <div>
                <div className='flex justify-between p-4 gap-1'>
                    <div className='grid gap-4 grid-cols-3 mobile:gap-1'>
                        <span className='m-auto text-md mobile:text-sm'>Filter by
                        </span>
                        <FormControl sx={{ width: `${windowWidth > 640 ? '199px': '67px'}` }}>
                            <InputLabel id="demo-simple-select-label" sx={{fontSize: `${window.innerWidth > 640 ? '20px': '14px'}`}}>Size</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="Size"
                                onChange={handleChangeSize}
                            >
                                <MenuItem value='none'>None</MenuItem>
                                <MenuItem value='M'>M</MenuItem>
                                <MenuItem value='L'>L</MenuItem>
                                <MenuItem value='XL'>XL</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: `${windowWidth > 640 ? '199px': '75px'}` }}>
                            <InputLabel id="demo-simple-select-label" sx={{fontSize: `${window.innerWidth > 640 ? '20px': '14px'}`}}>Color</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={color}
                                label="Color"
                                onChange={handleChangeColor}
                            >
                                <MenuItem value='none'>None</MenuItem>
                                <MenuItem value='#fff'>White</MenuItem>
                                <MenuItem value='#000'>Black</MenuItem>
                                <MenuItem value='#FF0000'>Red</MenuItem>
                                <MenuItem value='#689F39'>Green</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid grid-cols-2 '>
                        <span className='m-auto text-md mobile:text-sm'>Sort by</span>
                        <FormControl sx={{ width: `${windowWidth > 640 ? '199px': '75px'}` }}>
                            <InputLabel id="demo-simple-select-label" sx={{fontSize: `${window.innerWidth > 640 ? '20px': '14px'}`}}>Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Sort"
                                onChange={handleChangeSort}
                            >

                                <MenuItem value='none'>None</MenuItem>
                                <MenuItem value='oldest'>Oldest</MenuItem>
                                <MenuItem value='new'>New</MenuItem>
                                <MenuItem value='trend'>Trend</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <ProductList></ProductList>
            </div>
        </div>
    )
};
