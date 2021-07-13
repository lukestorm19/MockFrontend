import {render} from '@testing-library/react';
import { Router } from 'react-router-dom';
import Navbar from "./Navbar";
it("checkNavbarRender",()=>{
    const {querryByTitle}=render(<Router/>);
    const nav = querryByTitle("dummy");
    expect(nav).toBeTruthy();
})