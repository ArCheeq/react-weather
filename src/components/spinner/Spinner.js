import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from './spinner.module.scss';

const Spinner = ({theme}) => {
    return (
        <div className={s.spinner}>
            <GlobalSvgSelector id={'spinner'} theme={theme} width="80px" height="80px"/>
        </div>
    )
}

export default Spinner;