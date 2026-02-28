import DashBoardLayout from '@/components/layout/admin/dashboard-layout';
import CreateStory from '@/features/admin/stories/create-story';
import React from 'react'

const CreateStoryPage = () => {
  return (
    <div>
        <CreateStory />
    </div>
  )
}

CreateStoryPage.getLayout = function getLayout(page: React.ReactElement) {
    return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default CreateStoryPage