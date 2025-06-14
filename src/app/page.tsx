'use client'
import { ChevronLeft, ChevronRight, LucideLinkedin , Instagram, Github, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import Lanyard from './component/card';



export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame function
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: Event): void => {
      const target = (e.target as Element)?.closest('a[href^="#"]') as HTMLAnchorElement;
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            lenis.scrollTo(element, {
              offset: -80, // Adjust offset as needed
              duration: 3,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  // Fungsi untuk menutup sidebar, bisa dipanggil dari beberapa tempat
  const closeSidebar = (): void => setSidebarOpen(false);

  return (

    <div className="w-full min-h-screen bg-bg-color text-text-color font-sans">
      
      {/* =========== PANEL SIDEBAR (HANYA TAMPIL DI MOBILE) =========== */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#1C1C1C] z-60 transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-white font-bold">
            <Image src={"/logo.png"} alt="Logo Ariq" width={24} height={24} className="inline-block mr-2" />
          </h2>
          <button onClick={closeSidebar}>
            <X size={24} className="text-white" />
          </button>
        </div>
        <nav className="mt-5">
          <ul className="flex flex-col space-y-2 p-5">
            <li><a href="#about" style={{fontFamily : 'Monocraft'}} onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">About Me</a></li>
            <li><a href="#skills" style={{fontFamily : 'Monocraft'}} onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Skills</a></li>
            <li><a href="#projects" style={{fontFamily : 'Monocraft'}} onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Projects</a></li>
            <li><a href="#experiences" style={{fontFamily : 'Monocraft'}} onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Experiences</a></li>
          </ul>
        </nav>
      </div>

      {/* Overlay, untuk menutup sidebar saat diklik di luar area sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Kontainer utama halaman Anda */}
      <div className="max-w-6xl mx-auto px-10">
        
        {/* =========== HEADER =========== */}
        <header className="w-full bg-[#1A1B1D] flex justify-between md:justify-center items-center py-6 px-4 fixed top-0 left-0 z-50 shadow-lg">

          {/* Navigasi Desktop (sembunyi di mobile) */}
          <nav className="hidden md:block md:content-center self-center">
            <ul className="flex items-center space-x-8">
              <li><a href="#about" style={{fontFamily : 'Monocraft'}} className="font-medium hover:text-[#D4E4C1] transition-colors">About Me</a></li>
              <li><a href="#skills" style={{fontFamily : 'Monocraft'}} className="font-medium hover:text-[#D4E4C1] transition-colors">Skills</a></li>
              <li><a href="#projects" style={{fontFamily : 'Monocraft'}} className="font-medium hover:text-[#D4E4C1] transition-colors">Projects</a></li>
              <li><a href="#experiences" style={{fontFamily : 'Monocraft'}} className="font-medium hover:text-[#D4E4C1] transition-colors">Experiences</a></li>
            </ul>
          </nav>

          {/* Tombol Hamburger (hanya tampil di mobile) */}
          <div className="fixed md:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={28} className="text-white"/>
            </button>
          </div>
        </header>

        {/* =========== HERO SECTION =========== */}
        <section className="grid-cols-1 md:flex items-center justify-between gap-10 my-12 pt-8 md:pt-16">
        <div className='md:hidden -my-[80px] w-full h-[400px]'>
          <Lanyard scale={4.5} position={[0, 0, 30]} fov={20}/> 
        </div>

          {/* Teks di Kiri */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold font-custom text-[#D4E4C1]">Hi, I&apos;m Ariq—</h1>
            <h2 className="text-2xl mt-2 font-custom text-[#E0ECE2]">Biomedical Engineering Student & <br />IC Design Enthusiast.</h2>
            <p className="text-lg mt-4 max-w-md font-sans text-[#A0ADA3]">I design circuits that care — blending medicine with analog IC passion.</p>
            <div className="flex gap-6 items-center mt-8 text-secondary-text font-medium text-lg">
              <Image src="/cadence-logo-green 1.png" alt="Cadence Virtuoso" width={100} height={100} />
              <Image src={"/vitis-logo-green.png"} alt="Xilinx Vitis" width={100} height={100} />
              <Image src={"/vivado-logo-green.png"} alt="Xilinx Vivado" width={100} height={100} />
            </div>
          </div>

          <div className='md:block hidden h-[400px]'>
            <Lanyard scale={4.5} position={[0, 0, 30]} fov={20}/>
          </div>
        </section>

        {/* =========== ABOUT ME SECTION =========== */}
        <section id="about" className="my-24 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#D4E4C1]">About Me</h2>
          <div className="space-y-4 mt-6 text-secondary-text">
            <p className='text-[#A0ADA3]'>
              Hello! I am a Biomedical Engineering student with a keen interest in Analog IC Design, particularly in designing precision circuits such as amplifiers, sensor interfaces, and physical layouts. Currently, I am actively exploring tools like Cadence Virtuoso, LTspice, and Spectre to design and simulate analog circuits. I enjoy the process of designing from schematic to layout and am continuously learning to refine my skills in this field.
            </p>
            <p className='text-[#A0ADA3]'>
              I believe that analog design is the art of combining creativity with technical precision, and I aim to contribute to the development of electronic solutions for medical applications and beyond.
            </p>
          </div>
        </section>

        {/* =========== SKILLS SECTION =========== */}
        <section id="skills" className="my-24">
          <h2 className="text-3xl font-bold text-[#E0ECE2] mb-8">Skills</h2>
          <div className="grid-cols-1 md:flex gap-24">
            {/* Daftar Keterampilan di Kiri */}
            <div className="md:w-1/3">
              <ul className="space-y-4 flex md:block space-x-4">
                <li><a href="#" className="text-xl font-medium text-[#313F59] hover:text-[#E0ECE2] transition-colors">Analog Circuit Design</a></li>
                <li><a href="#" className="text-xl font-medium text-[#313F59] hover:text-[#E0ECE2] transition-colors">Simulation & Modeling</a></li>
                <li><a href="#" className="text-xl font-medium text-[#313F59] hover:text-[#E0ECE2]">Layouting</a></li> {/* Link Aktif */}
              </ul>
            </div>
            {/* Deskripsi di Kanan */}
            <div className="md:w-2/3">
              <p className="text-secondary-text">
                Memahami prinsip dasar layouting untuk IC analog, dengan fokus pada matching, minimasi parasitik, dan kompatibilitas manufaktur. Terbiasa menerapkan teknik common-centroid, interdigitasi, serta memperhatikan routing, shielding, dan symmetry untuk meningkatkan performa sirkuit. Berpengalaman menggunakan Cadence Virtuoso untuk membuat layout dari schematic hingga tahap LVS (Layout vs Schematic) dan DRC (Design Rule Check).
              </p>
            </div>
          </div>
        </section>

        {/* =========== PROJECTS SECTION (BARU) =========== */}
        <section id="projects" className="my-24">
  <h2 className="text-3xl font-bold text-[#E0ECE2] mb-8">Projects</h2>
  <div className="grid grid-cols-1 md:flex items-center gap-16">
    
    {/* Slider/Carousel di Kiri */}
    <div className="md:w-1/2">
      <div className="relative border border-gray-700 rounded-2xl p-8 h-80 flex items-center justify-center">
        {/* Ikon Gambar di Tengah */}
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>

        {/* Panah Kiri */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors">
          <ChevronLeft size={24} />
        </button>
        
        {/* Panah Kanan */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors">
          <ChevronRight size={24} />
        </button>

        {/* Dots Indikator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Deskripsi Proyek di Kanan */}
    <div className="md:w-1/2">
      <h3 className="overflow-hidden text-xl md:text-2xl font-bold text-[#E0ECE2]">
        Transimpedance Amplifier Design
      </h3>
      <p className="mt-4 text-secondary-text">
        Merancang sebuah Transimpedance Amplifier (TIA) untuk mengkonversi arus menjadi tegangan dengan gain tinggi dan efisiensi daya.
      </p>
      <p className="mt-2 text-secondary-text">
        TIA menghasilkan gain sebesar 67.02 dB dengan bandwidth mencapai 8.19 MHz, serta konsumsi daya yang rendah sebesar 743.5 µW.
      </p>
      <p className="mt-4 text-sm text-text-color">
        <span className="font-semibold">Tools Used:</span> Cadence Virtuoso
      </p>
    </div>
    
  </div>
</section>

        {/* =========== EXPERIENCES SECTION (BARU) =========== */}
        <section id="experiences" className="my-24">
          <h2 className="text-3xl font-bold text-[#E0ECE2] mb-12">Experiences</h2>
          <div className="relative">
            {/* Pengalaman 1 */}
            <div className="mb-12 relative">
            <h3 className="text-xl font-bold text-[#E0ECE2] mt-1">Intern at Beehive Drones</h3>
              <p className="text-sm text-secondary-text">Research Intern – January 2025 – February 2025</p>
              <p className="mt-2 text-secondary-text">
                Melakukan riset terkait aplikasi SAST Keypoint Detection menggunakan FPGA. Mengembangkan dan mengimplementasikan algoritma deteksi keypoint pada FPGA dengan menggunakan Xilinx Vivado dan Vitis. Bertanggung jawab untuk merancang dan mengoptimalkan custom IP untuk deteksi keypoint, serta mengintegrasikan sistem untuk pengolahan data secara real-time.
              </p>
            </div>

            {/* Pengalaman 2 */}
            <div className="relative">
            <h3 className="text-xl font-bold text-[#E0ECE2] mt-1">Capstone Project – ECG Sensor Design</h3>
              <p className="text-sm text-secondary-text">Project Lead – March 2025 – Present</p>
              <p className="mt-2 text-secondary-text">
                Merancang rangkaian front-end analog untuk sensor ECG menggunakan STM32 dan ADS1115. Fokus pada minimisasi noise dan kondisioning sinyal untuk pengukuran yang akurat. Mengimplementasikan teknik filtering untuk meningkatkan kualitas sinyal.
              </p>
            </div>
          </div>
        </section>
        </div>

              {/* =========== FOOTER / LET'S CONNECT (BARU) =========== */}
        <footer className="grid grid-cols-1 md:grid-cols-3 mt-24 items-stretch rounded-2xl">
        {/* Kolom Kiri: Info Kontak */}
        <div className="bg-[#1D2026] p-8 md:col-span-1">
          <div className="flex items-center gap-6">
            {/* Ikon Kustom (SVG) */}
            <Image src={"/Logo.png"} alt="Logo Ariq" width={64} height={64} className="" />
    
            
            {/* Detail Kontak */}
            <div>
              <h4 className="font-bold text-white text-base">Ariq Fadhillah Jeha</h4>
              <a href="mailto:ariqfadhh@gmail.com" className="block text-secondary-text text-sm hover:text-primary-color transition-colors">ariqfadhh@gmail.com</a>
              <a href="tel:+62895622994052" className="block text-secondary-text text-sm hover:text-primary-color transition-colors">+62-895622994052</a>
              <p className="text-secondary-text text-sm">Sleman, Yogyakarta</p>
            </div>
          </div>
        </div>
        
        {/* Kolom Kanan: Let's Connect */}
        <div className="bg-[#D4E4C1] text-bg-color p-8 md:col-span-2 flex flex-col justify-center">
          <h2 className="text-5xl font-medium text-black">Let&apos;s Connect!</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-black hover:opacity-75 transition-opacity">
              <LucideLinkedin size={32} />
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:opacity-75 transition-opacity">
              <Instagram size={32} />
            </a>
            <a href="#" aria-label="GitHub" className="text-black hover:opacity-75 transition-opacity">
              <Github size={32} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}