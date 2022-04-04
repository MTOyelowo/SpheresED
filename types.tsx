export type School = {
    id: string;
    imageUri: string;
    schoolName: string;
};

export type Course = {
    id: string;
    imageUri: string;
    tutorNames: string;
    schoolName: string;
};

export type Topic = {
    id: 'string';
    imageUri: 'string';
    topic: 'string';
    tutor: 'string';
    course: 'string';
    schoolName: 'string';
};
export type Lesson = {
    id: 'string';
    imageUri: 'string';
    lesson: 'string';
    duration: 'string';
    tutor: 'string';
}

export type Picture = {
    id: 'string';
    pictureUri: 'string';
}