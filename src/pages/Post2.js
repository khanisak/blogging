import React from 'react';
import LayoutB from '../containers/LayoutB';
import PostTitle from '../containers/PostTitle';
import PostContent from '../containers/PostContent';

class Post2 extends React.Component {
    render() {
        const Github = <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>,
            GithubPages = <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a>,
            GithubPagesHelp = <a href="https://help.github.com/articles/what-is-github-pages/" target="_blank" rel="noopener noreferrer">sini</a>,
            LetsEncrypt = <a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">Let's Encrypt</a>,
            Jekyll = <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a>,
            ReactJS = <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>;

        return (
            <LayoutB>
                <PostTitle title={this.props.title} publishDate={this.props.publishDate} />
                <PostContent>
                    Github adalah
                    salah satu dari sekian banyak layanan hosting Git untuk mengembangkan
                    perangkat lunak bersama sama. {Github} menjadi tempat hosting favorit bagi
                    para developer yang mengembangkan <i>code</i> berbasis <i>community / open source</i>.
                </PostContent>
                <PostContent>
                    Selain sebagai tempat hosting layanan Git, terkadang profil {Github} seorang
                    developer dapat dijadikan sebuah nilai tambah pada saat melamar pekerjaan.
                </PostContent>
                <PostContent>
                    Nah kali ini saya akan berbagi mengenai salah satu fitur {Github} yaitu {GithubPages}. {GithubPages} adalah
                    salah satu fitur {Github} yang memperbolehkan kita untuk mem-<i>publish repository</i> kita
                    menjadi sebuah <i>website</i>. Ya benar, Layanan hosting maksud nya teman-teman ! :) <br />
                    Pada saat artikel ini ditulis, layanan hosting ini dapat kita nikmati secara gratis
                    untuk <i>Public Repository</i> dan berbayar untuk <i>Private Repository</i> dan beberapa limitasi serta
                    aturan penggunaan yang dapat dilihat di {GithubPagesHelp}.
                </PostContent>
                <PostContent>
                    <i><b>Yang perlu diperhatikan</b></i> adalah {GithubPages} hanya memperbolehkan kita untuk
                    <i> hosting <b>Static Website</b></i>. Itu berarti semua website anda yang
                    mengandung <i>server side scripting</i> seperti <i>PHP, Java, Node.js</i> tidak dapat dijalankan di {GithubPages}.
                    Tetapi <i>frontend framework</i> seperti <i>React.js, Angular.js</i> dapat kita hosting di {GithubPages}.
                </PostContent>
                <PostContent>
                    Berikut langkah langkah yang harus anda lakukan untuk mem-<i>publish repository</i> anda,
                    <ol>
                        <li><i>Login</i> ke {Github}</li>
                        <li>Buat repository sesuai keinginan anda</li>
                        <li><i>Git Push content website</i> ke repository yang anda buat</li>
                        <li>Masuk ke <i>repository</i> yang anda buat dan pergi ke halaman <i>setting</i> sesuai gambar di bawah <br /><br />
                            <img style={{ maxWidth: '100%' }} src="https://www.dropbox.com/s/0hp2w6a12mtd5vt/Setting%20Github.png?raw=1" alt="setting github" />
                        </li>
                        <li>Scroll ke bawah, pada <i>section</i> Github Pages, pilih <i>source / branch</i> yang akan dijadikan content website, umumnya nama
                        branch yang digunakan adalah <i>gh-pages branch</i>. Lihat gambar di bawah. <br /><br />
                        <img style={{ maxWidth: '100%' }} src="https://www.dropbox.com/s/cz7vbap9iope1u7/Github%20Pages%20Published.png?raw=1" alt="github pages published" />
                        </li>
                        <li>Selesai, akses website anda dengan alamat <i>https://username.github.io/repository-name</i></li>
                    </ol>
                </PostContent>
                <PostContent>
                    Kalau anda jeli, ada pilihan <i>Custom Domain</i> pada gambar diatas. Ya, {GithubPages} memperbolehkan kita
                    untuk menggunakan domain / subdomain kita sendiri. Cukup masukkan domain / subdomain yang ingin
                    digunakan lalu tekan tombol <i>Save</i>. <br />
                    Setelah itu yang harus anda lakukan adalah mengatur <i>DNS Record Domain</i> anda agar mengarah
                    ke halaman GithubPages. Lalu akses kembali website anda dengan Custom Domain anda ! :)
                    Oh ya, kalau sudah setting pakai custom domain, domain default dari
                    github yang <i>https://username.github.io/repository-name</i> akan tidak bisa diakses lagi.
                </PostContent>
                <PostContent>
                    Sekali lagi, kalau anda jeli. Ada pilihan <i>Enforce https</i> !
                    Itu artinya bahwa GithubPages otomatis menyediakan sertifikat ssl untuk website anda !
                    Menarik sekali kan? GithubPages bekerjasama dengan {LetsEncrypt} untuk menyediakan sertifikat
                    ssl kita secara gratis guys.! <br />
                    Ingat bahwa setelah anda melakukan setting domain, sertifikat ssl tidak serta merta akan langsung
                    muncul pada saat anda mengakses custom domain anda. Sertifikat akan di issued dalam
                    waktu 1x24 jam sesuai ketentuan dari {GithubPages}. <br />
                    Pastikan bahwa saat setelah anda menyimpan custom domain anda, maka muncul notifikasi bahwa sertifikat ssl
                    anda sedang proses issued, jika tidak, hapus custom domain anda, lalu simpan kembali custom domain anda untuk
                    memancing proses issued https nya. <br />
                    Karena kemarin pengalaman saya saat saya save custom domain, notifikasi nya tidak berubah menjadi issued https,
                    sepertinya memang masih bug karena untuk sistem https di custom domain {GithubPages} sendiri baru saja
                    diberlakukan per 1 Mei 2018.
                </PostContent>
                <PostContent>
                    Satu hal terakhir yang perlu disampaikan, bahwa {GithubPages} bekerjasama juga 
                    dengan <i>framework {Jekyll}</i> untuk menyediakan platform blogging bagi penggunanya. <br />
                    Saya sendiri belum sempat untuk utak atik {Jekyll} karena memang belum tertarik menggunakannya.
                </PostContent>
                <PostContent>
                    Website ini sendiri saya hosting di {GithubPages} dan menggunakan <i>framework {ReactJS}</i>.
                    Kenapa saya menggunakan {ReactJS}? Mungkin akan saya bahas di kesempatan selanjutnya (hehe). Terima kasih.
                </PostContent>
            </LayoutB>
        );
    }
}

Post2.defaultProps = {
    publishDate: 'default'
}

export default Post2;