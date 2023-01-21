import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice/themeSlice';
import useChangeTheme from '../../hooks/useChangeTheme';
import {storage} from '../../model/storage';
import s from './header.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

const Header = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();
    const {changeCssRootVariables} = useChangeTheme();

    const onChangeTheme = () => {
        dispatch(changeTheme());   
    }

    useEffect(() => {
        storage.setItem('theme', theme);
        changeCssRootVariables(theme);
    }, [theme]);

    const options = [
        { value: 'Kiev', label: 'Киев' },
        { value: 'Kharkiv', label: 'Харьков' },
        { value: 'Dnipro', label: 'Днепр' }
      ]

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            fontSize: '16px',
            fontWeight: '500',
            backgroundColor: theme === 'dark' ? '#4F4F4F' : '#DAE9FF',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
        })
    }

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header__logo'/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change__theme} onClick={onChangeTheme}>
                    <GlobalSvgSelector id='change__theme'/>
                </div>
                <Select defaultInputValue={options[0].label} options={options} styles={colourStyles}/>
            </div>
        </div>
    )
}

export default Header;