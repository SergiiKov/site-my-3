
import React from 'react';

const ResumeText = () => (
    <div className='resume-text '>
    <div className="row-full">

          <div className="col-1-of-3">
          </div>
    <div className="col-2-of-3">
      <div className='title u-margin-bottom-small'>
        <h2 className='heading-secondary'>MY RESUME</h2>
      </div>

      <div className='resume-block resume-margin'>
        <h3 className='heading-tertiary'>Освіта</h3>
          <p className='paragraph'>
            2008р.-2013р. Повна вища(спеціаліст).
            Вінницький національний технічнийуніверситет,
            інститутінформаційнихтехнологійтакомп'ютерноїінженерії,
            спеціальність–комп'ютернісистемитамережі.
          </p>
        </div>
          <div className="resume-block resume-margin">
            <h3 className='heading-tertiary'>Досвід роботи</h3>
            <p className='paragraph'>
                З01.03.2016р.працююуВінницькомуІнформаційно
                -аналітичномуцентрізобслуговуванняустановсоціального
                захистунаселеннянапосадіпровіднийінженерпрограміст.
                Обов’язкинаданійпосаді:Встановленняопераційнихсистем
                сімействаWindowsXP-10,Linux.Установка,настройкаі
                оновленняофісноготаприкладногоПО.Налагодженнята
                підтримкароботилокальноїмережі,роботамережевим
                обладнанням.Установкиіпідтримкасерверногопрограмного
                забезпеченняWindowsServer2008-16.Обслуговування,ремонт
                комп'ютерноїтаофісноїтехніки.
                Розробка,підтримка,наповненняконтентомвеб-сайтуцентру.
            </p>
          </div>

          <div className="resume-block resume-margin">
          <h3 className='heading-tertiary'>Професійні навички</h3>
          <ul className='list'>
            <li className='list-li'>Знання of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI</li>
            <li className='list-li'>Basic Knowledge of: PHP, MySql, Firebase</li>
            <li className='list-li'>Умінняпрацюватиз: NPM, Webpack, Gulp, Git, GitHub, Adobe Photoshop</li>
            <li className='list-li'>Наявністьзнань CMS Wordpress, Joomla</li>
            <li>ЗнанняанглійськоїмовинарівніPre-Intermediate
                (дляведеннятехнічноїдокументації).
            </li>
          </ul>
          </div>
    
          </div>
    </div>
    </div> 
);

export default ResumeText;