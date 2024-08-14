import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,

  DialogPanel,
} from '@headlessui/react'
import { Fragment } from 'react'

const NewModal = ({ closeModal, isOpen, item }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-screen-sm min-h-[550px] overflow-auto max-h-[650px] transform  rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all'>
               
                <div style={{
                  backgroundImage: `url(${item?.img})`
                }} className={` min-h-[650px] bg-center object-cover bg-cover bg-no-repeat border-2`}
                
                >
                  <div className='bg-rose-500 px-8 py-3 text-white rounded-md absolute top-[90px] left-[80px] -rotate-45'>
                    <h1 className='text-xl font-medium'>{item?.name || 'চান্দেরি সিল্ক'}</h1>
                    <h1>BDT {item?.price || '550'}TK</h1>

                  </div>
                </div>
               
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

NewModal.propTypes = {
  closeModal: PropTypes.func,
  item: PropTypes.object,
  isOpen: PropTypes.bool,
}

export default NewModal
