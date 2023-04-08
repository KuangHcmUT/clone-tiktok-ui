import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/317406055_1791287834575902_990998793431734584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=ePWETEnTJPcAX88yUxe&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDzv5g4jDK_2Bi923HxBaDot03xHfCX2IUv0p-WpVftPg&oe=6435FEEB"
                alt="AnhLak"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('nametext')}>Ánh Trần</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Trananhhnlak</span>
            </div>
        </div>
    );
}

export default AccountItem;
