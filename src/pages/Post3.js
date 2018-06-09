import React from 'react';
import LayoutB from '../containers/LayoutB';
import PostTitle from '../containers/PostTitle';
import PostContent from '../containers/PostContent';

class Post3 extends React.Component {
    render() {
        const Dropbox = <a href="https://www.dropbox.com/" target="_blank" rel="noopener noreferrer">Dropbox</a>,
            GoogleDrive = <a href="https://www.google.com/intl/in/drive/" target="_blank" rel="noopener noreferrer">Google Drive</a>;

        return (
            <LayoutB>
                <PostTitle title={this.props.title} publishDate={this.props.publishDate} />
                <PostContent>
                    {Dropbox} merupakan salah satu alternatif dari {GoogleDrive}. Oke, jadi sudah tau kan
                    kira kira untuk apa {Dropbox} ini?
                    Kita bisa <i>upload</i> sebuah gambar ke {Dropbox} lalu menggunakannya di website lain.
                    Ikuti cara berikut,
                    <ol>
                        <li><i>Login</i> ke akun {Dropbox}</li>
                        <li><i>Upload</i> sebuah gambar apa saja</li>
                        <li>Buka gambar tersebut di {Dropbox}. Lalu klik tombol <b>"Bagikan"</b> yang ada di pojok kanan atas</li>
                        <li>Setelah itu anda tinggal mengklik tombol <b>"Buat Tautan"</b></li>
                        <li>Anda akan mendapatkan url dengan format kira kira sebagai berikut <i>https://www.dropbox.com/s/gv3svo2k3gvpx3x/Bagikan.png?dl=0</i></li>
                        <li>Nah, url itu tidak bisa langsung kita gunakan, ubah parameter <b><i>dl=0</i></b> menjadi <b><i>raw=1</i></b> sehingga kira kira
                        menjadi seperti ini https://www.dropbox.com/s/gv3svo2k3gvpx3x/Bagikan.png?raw=1</li>
                        <li>Lalu silahkan gunakan url itu untuk menampilkan gambar seperti di bawah :) <br/><br/>
                            <img style={{maxWidth: '100%'}} src="https://www.dropbox.com/s/ovvdnngyuzh96bh/Kucing%20Lucu.jpg?raw=1" alt="Kucing Idaman"/>
                        </li>

                    </ol>
                </PostContent>
            </LayoutB>
        );
    }
}

export default Post3;