import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { useUser } from '../user';
import MemberStatus from './MemberStatus';
import { useToggle } from 'react-use';
import NoteModal from './NoteModal';


const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const user = useUser();
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [isNoteModalOpen, toggleNoteModal] = useToggle(false);

  return (
    <div className="min-h-screen bg-white">
      {/* 쪽지함 */}
      <NoteModal isOpen={isNoteModalOpen} handleClose={toggleNoteModal} />

      {/* 알림바 */}
      <div className="w-full bg-[var(--light-purple)] text-center text-sm py-1 font-sans font-normal">
        게이트 위험 수준 [안전] 단계입니다
      </div>

      {/* 메뉴바 */}
      <div className="w-full border-b border-b-gray-400 border-b-[0.5px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-0 lg:px-8">
          <div className="flex text-base">
            <button className="px-4 py-2 flex items-center lg:border-l-[0.5px] border-gray-400 cursor-pointer">조직도 안내</button>
            <button className="px-4 py-2 flex items-center border-l-[0.5px] border-gray-400 cursor-pointer">민원 바로가기</button>
            <Link to="https://flossy-divan-9fd.notion.site/Star-Rain-1b3c22059ac480acbf02c1449aa8a1b7" target='_blank'><button className="px-4 py-2 flex items-center border-l-[0.5px] lg:border-r-[0.5px] border-gray-400 cursor-pointer">정보공개포털</button></Link>
          </div>
          <MemberStatus className="hidden lg:block" openNoteModal={toggleNoteModal} />
        </div>
      </div>


      {/* 메인영역 */}
      <div className="w-full border-b border-b-gray-400 border-b-[0.5px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 relative">
          {/* 왼쪽 빈 공간 */}
          <div className="flex-1 lg:hidden"></div>

          {/* 가운데 로고 */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link
              to="/"
              className="flex flex-col items-center text-center"
            >
              <span className="text-xl text-gray-500 font-gs">시민의 힘 세계의 미래</span>
              <h1 className="text-5xl font-bold tracking-widest">UNION</h1>
            </Link>
          </div>

          {/* 오른쪽 햄버거 버튼 */}
          <div className="flex-1 flex justify-end">
            <button
              className="flex flex-col justify-center items-center space-y-1 lg:hidden"
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>

          {/* 네비게이션 메뉴 (데스크탑 전용) */}
          <div className="hidden lg:flex space-x-12 text-lg">
            {/* 유니온 소개 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2 font-semibold">
                유니온 소개
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-lg w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/hello" className="py-1 hover:bg-[var(--light-purple)] rounded">총장 인사말</Link>
                <Link to="/timeline" className="py-1 hover:bg-[var(--light-purple)] rounded">연혁</Link>
                <Link to="/teamIntro" className="py-1 hover:bg-[var(--light-purple)] rounded">부서 소개</Link>
                <Link to="/memberIntro" className="py-1 hover:bg-[var(--light-purple)] rounded">직원 소개</Link>
              </div>
            </div>




            {/* 유니온 소식 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2 font-semibold">
                유니온 소식
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-lg w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/notice" className="py-1 hover:bg-[var(--light-purple)] rounded">공지사항</Link>
                <Link to="/schedule" className="py-1 hover:bg-[var(--light-purple)] rounded">일정</Link>
                <Link to="/career" className="py-1 hover:bg-[var(--light-purple)] rounded">채용</Link>
              </div>
            </div>

            {/* 직원 마당 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2 font-semibold">
                직원 마당
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-lg w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/nojo" className="py-1 hover:bg-[var(--light-purple)] rounded">노동조합</Link>
              </div>
            </div>

            {/* 시민 마당 메뉴 */}
            <div className="relative group flex flex-col items-center">
              <button className="px-4 py-2 font-semibold">
                시민 마당
              </button>

              {/* 드롭다운 메뉴 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 hidden group-hover:flex flex-col bg-white border-2 border-[#877b93] rounded-lg w-[8rem] p-2 z-10 text-base text-center">
                <Link to="/minwonList" className="py-1 hover:bg-[var(--light-purple)] rounded">민원 사례</Link>
                <Link to="/minwonSubmit" className="py-1 hover:bg-[var(--light-purple)] rounded">민원 신청</Link>
              </div>
            </div>
          </div>
        </div>
        {/* ✨ 드롭다운 메뉴 (상단 flex 구조 바깥으로 뺌) */}
        {isMenuOpen && (
          <div className="border-t border-gray-400 w-full bg-white lg:hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center p-8 space-y-8">
              <div className="flex flex-col items-center space-y-4 text-lg w-full max-w-xs">
                <div className='flex flex-col items-center w-full'>
                  <MemberStatus openNoteModal={toggleNoteModal} />
                </div>
                {/* 유니온 소개 */}
                <div className="flex flex-col items-center w-full">
                  <div className="font-bold mb-2">유니온 소개</div>
                  <Link to="/hello" className="py-1 hover:bg-gray-100 w-full text-center rounded">총장 인사말</Link>
                  <Link to="/timeline" className="py-1 hover:bg-gray-100 w-full text-center rounded">연혁</Link>
                  <Link to="/teamIntro" className="py-1 hover:bg-gray-100 w-full text-center rounded">부서 소개</Link>
                  <Link to="/memberIntro" className="py-1 hover:bg-gray-100 w-full text-center rounded">직원 소개</Link>
                </div>

                {/* 유니온 소식 */}
                <div className="flex flex-col items-center w-full">
                  <div className="font-bold mb-2">유니온 소식</div>
                  <Link to="/notice" className="py-1 hover:bg-gray-100 w-full text-center rounded">공지사항</Link>
                  <Link to="/schedule" className="py-1 hover:bg-gray-100 w-full text-center rounded">일정</Link>
                  <Link to="/career" className="py-1 hover:bg-gray-100 w-full text-center rounded">채용</Link>
                </div>

                {/* 직원 마당 */}
                <div className="flex flex-col items-center w-full">
                  <div className="font-bold mb-2">직원 마당</div>
                  <Link to="/nojo" className="py-1 hover:bg-gray-100 w-full text-center rounded">노동조합</Link>
                </div>

                {/* 시민 마당 */}
                <div className="flex flex-col items-center w-full">
                  <div className="font-bold mb-2">시민 마당</div>
                  <Link to="/minwonList" className="py-1 hover:bg-gray-100 w-full text-center rounded">민원 사례</Link>
                  <Link to="/minwonSubmit" className="py-1 hover:bg-gray-100 w-full text-center rounded">민원 신청</Link>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>



     

      {/* 본문 */}
      <div className="w-full">
        { children }
      </div>

    </div>
    
  );
};

export default MainLayout;
