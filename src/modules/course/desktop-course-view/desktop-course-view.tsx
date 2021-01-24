import React from 'react';
import { ImageSimple } from '@modules/core/common/image-simple/image-simple';
import styled from 'styled-components';
import {
  mixinFont134,
  mixinFont135,
  mixinFont144,
  mixinFont147,
  mixinFont167,
  mixinFont247,
  mixinFont327,
} from '@modules/core/mixins/font-mixins';
import ShareIcon from '@static/icons/share.svg?sprite';
import { AvatarSimple } from '@modules/core/common/avatar-simple/avatar-simple';
import { SvgSimple } from '@modules/core/common/svg-simple/svg-simple';

export interface IDesktopCourseViewProps {
}

export const CourseViewWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
`;
export const CourseViewSection = styled.section``;
export const CourseViewTitle = styled.h1`
  ${mixinFont327};
`;
export const CourseViewLanguage = styled.div`
  margin-top: 2.1rem;
`;
export const LanguageTitle = styled.span`
  ${mixinFont144};
`;
export const LanguageValue = styled.b`
  ${mixinFont147};
`;
export const CourseViewFigure = styled.figure`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
export const CourseViewPicture = styled(ImageSimple)`
  max-width: 74rem;
  max-height: 48rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .6rem;
`;
export const VolumeWrapper = styled.div``;
export const VolumeTitle = styled.h2`
  ${mixinFont247};
  margin-bottom: 2.4rem;
`;
export const VolumeList = styled.ul`
  display: flex;
`;
export const VolumeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;

  background: #f0f1fc;
  padding: 3.7rem 2.4rem;
  border-radius: .6rem;

  &:not(:last-of-type) {
    margin-right: .7rem;
  }
`;
export const VolumeItemTitle = styled.strong`
  ${mixinFont167};
`;
export const VolumeItemDescription = styled.p`
  ${mixinFont144};
`;

export const CourseViewSideblock = styled.aside`
  margin-left: 2.4rem;
  width: 24rem;
`;

export const CourseViewVideoPlayer = styled.div`
  margin-top: 4rem;

  width: 100%;
  height: 100%;
  max-height: 37rem;
  background: #f0f1fc;
`;

export const CourseAuthor = styled.div``;
export const CourseAuthorWrapper = styled.div`
  display: flex;
`;
export const CourseAuthorInfo = styled.div``;

export const CourseAuthorLink = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
`;

export const CourseAuthorCreatedBy = styled.span`
  ${mixinFont134};
`;
export const CourseAuthorName = styled.span`
  ${mixinFont135};
  margin-top: .4rem;
`;

export const CourseAuthorShare = styled.button`
  min-width: 40px;
  height: 40px;
  border: 1px solid #e2e4eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  color: #212B36;
  transition: border .3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transition: border .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 1px solid #897acc;
  }
`;

export const CourseAuthorBio = styled.p`
  ${mixinFont134};
  color: #637381;
  margin-top: 2.4rem;
`;

export const DesktopCourseView: React.FC<IDesktopCourseViewProps> = () => {
  return (
    <CourseViewWrapper>
      <CourseViewSection>
        <CourseViewTitle>
          What is Music? An Introduction to Music Psychology
        </CourseViewTitle>

        <CourseViewLanguage>
          <LanguageTitle>Language:</LanguageTitle>

          <LanguageValue>English</LanguageValue>
        </CourseViewLanguage>

        <CourseViewFigure>
          <CourseViewPicture
            alt='What is Music? An Introduction to Music Psychology'
            src='https://cdn-start.grinfer.com/api/storage/files/2cb728b2-9c23-462f-ab7e-ae8a367569b7/preview?size=LARGE&amp;imageType=webp'
          />
        </CourseViewFigure>

        <VolumeWrapper>
          <VolumeTitle>
            This Course is for You
          </VolumeTitle>

          <VolumeList>
            <VolumeItem>
              <VolumeItemTitle>35 minutes</VolumeItemTitle>

              <VolumeItemDescription>
                of video/audio content
              </VolumeItemDescription>
            </VolumeItem>

            <VolumeItem>
              <VolumeItemTitle>1</VolumeItemTitle>

              <VolumeItemDescription>
                Downloadable attachment
              </VolumeItemDescription>
            </VolumeItem>

            <VolumeItem>
              <VolumeItemTitle>1 minute</VolumeItemTitle>

              <VolumeItemDescription>of reading content</VolumeItemDescription>
            </VolumeItem>
          </VolumeList>
        </VolumeWrapper>

        <CourseViewVideoPlayer />

      </CourseViewSection>

      <CourseViewSideblock>
        <CourseAuthor>
          <CourseAuthorWrapper>
            <figure>
              <AvatarSimple
                src='https://cdn-start.grinfer.com/api/storage/files/12182c35-6883-4f04-817e-242e295b57b0/preview?size=SMALL&imageType=webp'
                alt='Jacob Wiles'
              />
            </figure>

            <CourseAuthorLink href=''>
              <CourseAuthorCreatedBy>Created by</CourseAuthorCreatedBy>

              <CourseAuthorName>Jacob Wiles</CourseAuthorName>
            </CourseAuthorLink>

            <CourseAuthorShare>
              <SvgSimple
                src={ShareIcon}
                fill='currentColor'
                width='13'
                height='14'
              />
            </CourseAuthorShare>
          </CourseAuthorWrapper>

          <CourseAuthorBio>Description</CourseAuthorBio>
        </CourseAuthor>
      </CourseViewSideblock>
    </CourseViewWrapper>
  );
};