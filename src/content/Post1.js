import React from "react";
import PostContent from "../containers/PostContent";
import Subject from "../util/Subject";

const Post1 = () => {
	const { Laravel, Git } = Subject;
	return (
		<>
			<PostContent>
				<Laravel /> adalah sebuah
				<i> open source framework</i> PHP yang cukup populer untuk para
				developer <i>website</i>. Sedangkan <Git /> sendiri adalah
				sebuah
				<i> platform version control system</i> yang banyak digunakan
				oleh developer untuk mengerjakan atau mengembangkan sebuah
				projek bersama-sama.
			</PostContent>
			<PostContent>
				Pada saat anda melakukan <i>Git Clone</i> pada repository yang
				berisi projek laravel, dan meletakkannya pada web server anda
				(Contoh: <i>localhost/myproject</i>, anda akan menemukan bahwa
				website tersebut tidak dapat dijalankan. Web server akan
				mengembalikan error <i>500 Internal Server Error</i>
			</PostContent>
			<PostContent>
				Berikut langkah langkah yang harus anda lakukan untuk dapat
				menjalankan project laravel pada saat pertama kali melakukan{" "}
				<i>Git Clone</i>,
				<ol>
					<li>
						<i>Clone</i> Projek anda
					</li>
					<li>
						Pada OS Windows buka{" "}
						<i>
							<b>cmd</b>
						</i>
						, pada MacOS / Linux buka{" "}
						<i>
							<b>terminal</b>
						</i>
					</li>
					<li>
						Pada cmd / terminal, pindah ke folder aplikasi website
						yang sudah di clone
					</li>
					<li>
						Pada cmd / terminal, jalankan perintah{" "}
						<i>
							<b>"composer install"</b>
						</i>
						. Tunggu sampai selesai.
					</li>
					<li>
						Copy file{" "}
						<b>
							<i>.env.example</i>
						</b>{" "}
						dan beri nama baru{" "}
						<b>
							<i>.env</i>
						</b>{" "}
						pada folder aplikasi anda
					</li>
					<li>
						Buka file{" "}
						<b>
							<i>.env</i>
						</b>{" "}
						menggunakan editor yang anda sukai, lalu ubah field{" "}
						<b>
							<i>DB_DATABASE</i>
						</b>
						,{" "}
						<b>
							<i>DB_USERNAME</i>
						</b>{" "}
						dan{" "}
						<b>
							<i>DB_PASSWORD</i>
						</b>{" "}
						sesuai setting database yang anda punya
					</li>
					<li>
						Kembali ke cmd / terminal, jalankan perintah berikut di{" "}
						<i>root</i> folder aplikasi website anda,
						<ul>
							<li>
								<b>
									<i>php artisan key:generate</i>
								</b>
							</li>
							<li>
								<b>
									<i>php artisan key:migrate</i>
								</b>
							</li>
						</ul>
					</li>
					<li>
						Jika tidak ada error, buka browser dan coba akses
						kembali website anda.
					</li>
				</ol>
			</PostContent>
		</>
	);
};

Post1.defaultProps = {
	publishDate: "default"
};

export default Post1;
