import React from "react";
import PostContent from "../containers/PostContent";

class Post4 extends React.Component {
	render() {
		return (
			<>
				<PostContent>
					Berikut langkah yang harus anda lakukan untuk menginstall
					pgAdmin4 di Ubuntu 16.04
					<ol>
						<li>
							Install required package dengan command berikut{" "}
							<i>
								apt-get install virtualenv python-pip libpq-dev
								python-dev
							</i>
						</li>
						<li>
							Buat folder baru dengan command berikut{" "}
							<i>mkdir ~/Virtualenv</i>.
						</li>
						<li>cd ~/Virtualenv</li>
						<li>virtualenv pgadmin4-x.x</li>
						<li>cd pgadmin4-x.x</li>
						<li>source bin/activate</li>
						<li>
							Download pgAdmin source <b>.whl</b> di halaman
							berikut{" "}
							<a href="https://www.pgadmin.org/download/pgadmin-4-python-wheel/">
								https://www.pgadmin.org/download/pgadmin-4-python-wheel/
							</a>
						</li>
						<li>
							Masukkan file yang sudah di download tadi ke dalam
							folder <b>~/Virtualenv/pgadmin4-x.x</b>
						</li>
						<li>
							Jalankan command{" "}
							<b>
								pip install "
								<i>file yang sudah anda download tadi.</i>"
							</b>
						</li>
					</ol>
				</PostContent>

				<PostContent>
					Jika proses instalasi sudah selesai, pgAdmin dapat
					dijalankan dengan command berikut,
					<ol>
						<li>
							python
							~/Virtualenv/pgadmin4-x.x/lib/python2.7/site-packages/pgadmin4/pgAdmin4.py
						</li>
						<li>
							Akses pgAdmin4 di <b>localhost:5050</b>
						</li>
					</ol>
				</PostContent>
			</>
		);
	}
}

Post4.defaultProps = {
	publishDate: "default"
};

export default Post4;
