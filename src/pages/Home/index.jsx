import React from 'react';
import BannerSlide from './components/BannerSlide';
import MainLayout from '@/shared/MainLayout';

function MainPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-8 lg:px-0 mt-8 flex flex-col lg:flex-row ">
        {/* 왼쪽 배너 */}
        <div className="w-full lg:w-[635px] mb-8 lg:mb-0 lg:mr-[10px]">
          <BannerSlide />
        </div>

        {/* 오른쪽 영역 */}
        <div className="w-full lg:w-[635px] flex flex-col space-y-8">
          {/* 게이트 현황 */}
          <div className="panel gate-status w-full lg:w-[635px] rounded-md">
            <h2 className='text-5xl'>주간 게이트 현황</h2>
            <div className="w-full h-px bg-[#B6C5F2] my-5"></div>
            <div className="status-grid grid grid-cols-3 lg:grid-cols-6 gap-3 mt-3 justify-items-center">
              {[
                { grade: 'EX', count: 0, className: 'ex' },
                { grade: 'S', count: 4, className: 's' },
                { grade: 'A', count: 7, className: 'a' },
                { grade: 'B', count: 10, className: 'b' },
                { grade: 'C', count: 15, className: 'c' },
                { grade: 'D', count: 23, className: 'd' },
              ].map(({ grade, count, className }, idx) => (
                <div key={idx} className={`status-card ${className}`}>
                  <div className="label-section">{grade}</div>
                  <div className="count-section">{count}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-row mt-3">
            <div className="flex-1 h-26 bg-[#B6C5F2] flex flex-col items-center justify-center">
              {/* 왼쪽 아이콘 */}
              <img
                src="./images/phonecall.png" // ← 이미지 경로 맞게 바꿔!
                alt="Crime Report"
                className="w-16 h-16 object-contain mb-4"
              />
              {/* 오른쪽 텍스트 */}
              <div className="text-sm font-semibold text-center">
                게이트 발생 제보 →
              </div>
            </div>
            <div className="flex-1 h-26 bg-[#B6C5F2] flex flex-col items-center justify-center">
              {/* 왼쪽 아이콘 */}
              <img
                src="./images/goodjob.png" // ← 이미지 경로 맞게 바꿔!
                alt="Crime Report"
                className="w-16 h-16 object-contain mb-4"
              />
              {/* 오른쪽 텍스트 */}
              <div className="text-sm font-semibold text-center">
                칭찬합니다 →
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-8">
          {/* 하단 내용 */}
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {[
              { icon: "./images/howto.png", label: "사이트 이용 안내" },
              { icon: "./images/goodmember.png", label: "이달의 우수 사원" },
              { icon: "./images/recruit.png", label: "채용 소식" },
              { icon: "./images/group.png", label: "부서 소개" },
              { icon: "./images/orga.png", label: "직원 소개" },
              { icon: "./images/calendar.png", label: "일정" },
              { icon: "./images/goodexam.png", label: "우수 민원 사례" },
              { icon: "./images/well.png", label: "직원 복지" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={item.icon} alt={item.label} className="w-12 h-12 mb-2 object-contain" />
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
