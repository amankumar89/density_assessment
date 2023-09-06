import React from 'react'
import styles from './styles.module.css';
import logo from '../../../../../Images/brand-logo.jpg'

const WorkWithUs = () => {
  return (
    <div className="w-7/8  h-full flex px-16 py-16 bg-blue-100 rounded-3xl">
      <div className="w-1/2 flex flex-col gap-12">
        <div className="text-6xl font-bold">Work With Us</div>
        <div className="w-3/4 flex flex-col justify-between gap-2 py-12 rounded-3xl bg-white">
          <div className="px-8">
            <div>
              <img src={logo} alt="logo-image" width={75} height={75} className="rounded-lg" />
            </div>
            <div className="text-2xl font-bold mt-4">
              About
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum ab sapiente fugit laboriosam eius doloremque, incidunt corrupti libero repudiandae blanditiis? At facilis cumque nobis officiis sequi eos magnam velit?
            </div>
          </div>
          <div className="rounded-2xl py-4 px-8 self-end" style={{ background: '#fef7f1' }}>
            <div className="text-2xl font-bold">Product</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed iure perspiciatis at velit tempora doloremque, perferendis sapiente totam illum ipsum!</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-4 max-h-screen flex flex-col gap-8 items-end overflow-hidden">
        <div className="text-blue-700 text-7xl font-bold">ahead</div>
        <div className={`max-h-1/2 px-8 flex flex-col gap-4 overflow-y-scroll ${styles.scrollbar}`}>
          <div>
            <a
              href="#"
              class="block max-w-sm p-8 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</div>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempora molestias culpa, eveniet odit libero inventore cupiditate
                  nemo minima? Tempora.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-8 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</div>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempora molestias culpa, eveniet odit libero inventore cupiditate
                  nemo minima? Tempora.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-8 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</div>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempora molestias culpa, eveniet odit libero inventore cupiditate
                  nemo minima? Tempora.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-8 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</div>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempora molestias culpa, eveniet odit libero inventore cupiditate
                  nemo minima? Tempora.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-8 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</div>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempora molestias culpa, eveniet odit libero inventore cupiditate
                  nemo minima? Tempora.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkWithUs;