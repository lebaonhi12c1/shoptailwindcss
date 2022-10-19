import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
export default function Footer(params) {
    return (
        <div className="grid grid-cols-2 p-4 text-left gap-4 mobile:grid-cols-1">
            <div>
                <h3 className="text-2xl font-bold">SWEET SHOP</h3>
                <p className="text-justify my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, esse distinctio nemo, perspiciatis molestias perferendis eius odit facere officia dignissimos dicta quae doloremque voluptates, iste illum architecto libero iusto. Quas!</p>
                <div>
                    <IconButton>
                    <FacebookOutlinedIcon></FacebookOutlinedIcon>
                    </IconButton>
                    <IconButton>
                    <YouTubeIcon></YouTubeIcon>
                    </IconButton>
                    <IconButton>
                    <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton>
                    <PinterestIcon></PinterestIcon>
                    </IconButton>
                    <IconButton>
                    <TwitterIcon></TwitterIcon>
                    </IconButton>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">CONTACT</h3>
                <ul className='my-2'>
                    <li className='my-2 hover:text-violet-600 hover:translate-x-2 cursor-pointer ease-out duration-500 active:text-white'><PhoneOutlinedIcon></PhoneOutlinedIcon><span className='ml-4'>+84 090906060</span></li>
                    <li className='my-2 hover:text-violet-600 hover:translate-x-2 cursor-pointer ease-out duration-500 active:text-white'><LocationOnOutlinedIcon></LocationOnOutlinedIcon><span className='ml-4'>Ho Chi Minh City</span></li>
                    <li className='my-2 hover:text-violet-600 hover:translate-x-2 cursor-pointer ease-out duration-500 active:text-white'><AttachEmailOutlinedIcon></AttachEmailOutlinedIcon><span className='ml-4'>hackerWB@gmail.com</span></li>
                </ul>
            </div>
        </div>
    )
};
