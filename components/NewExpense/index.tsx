import React, { useContext } from 'react';
import {
  Container,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  HStack,
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputRightAddon,
  useToast,
} from '@chakra-ui/react';
import { AppContext } from '../../contexts/appcontext';
import CategorySelector from '../CategorySelector';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Category } from '@prisma/client';
import { getConfig } from '../../config/categories';

interface FormValues {
  category: Category;
  summary: string;
  paid: Date;
  sum: number | null;
}

function NewExpense() {
  const { globalAction, setGlobalAction } = useContext(AppContext);
  const toast = useToast();

  const actionName = 'new-expense';
  const initialValues: FormValues = {
    category: 'miscellaneous',
    summary: '',
    paid: new Date(),
    sum: null,
  };

  return (
    <>
      <Flex justify="center" my="6">
        <Button
          colorScheme="teal"
          onClick={() => setGlobalAction && setGlobalAction(actionName)}
        >
          Add new expense
        </Button>
      </Flex>
      <Drawer
        placement={'bottom'}
        onClose={() => setGlobalAction && setGlobalAction(null)}
        isOpen={globalAction === actionName}
      >
        <DrawerOverlay />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            category: Yup.string().required(),
            summary: Yup.string().required(),
            sum: Yup.number().required(),
            paid: Yup.date().required(),
          })}
          onSubmit={(values, actions) => {
            axios
              .post('expenses', { ...values, paid: new Date(values.paid) })
              .then(() => {
                toast({
                  title: 'Successfully saved.',
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                });
                actions.setSubmitting(false);
                setGlobalAction && setGlobalAction(null);
              })
              .catch((e) => {
                toast({
                  title: 'An error occured.',
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                });
                actions.setSubmitting(false);
              });
          }}
        >
          {({ errors, touched, isSubmitting, values, setFieldValue }) => (
            <Form>
              <DrawerContent bg="gray.100">
                <Container maxW="container.lg">
                  <DrawerHeader>New expense</DrawerHeader>
                  <DrawerBody>
                    <Container maxW="container.md">
                      <HStack
                        p={3}
                        bg="white"
                        borderLeftWidth={5}
                        borderColor={getConfig().color}
                        justify="space-between"
                        align="center"
                        borderRadius={'lg'}
                        boxShadow="sm"
                        spacing={4}
                        alignItems="stretch"
                      >
                        <Flex>
                          <CategorySelector
                            value={values.category}
                            onChange={(v: string) => {
                              setFieldValue('category', v);
                            }}
                          />
                        </Flex>

                        <Stack width="60%" flexShrink={0}>
                          <Field name="summary">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={
                                  !!errors.summary && !!touched.summary
                                }
                              >
                                <Input {...field} placeholder={'Summary'} />
                              </FormControl>
                            )}
                          </Field>
                          <Field name="paid">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.paid && !!touched.paid}
                              >
                                <Input {...field} type="date" />
                              </FormControl>
                            )}
                          </Field>
                        </Stack>
                        <InputGroup>
                          <Field name="sum">
                            {({ field }: FieldProps) => (
                              <FormControl
                                isInvalid={!!errors.sum && !!touched.sum}
                              >
                                <Input
                                  {...field}
                                  placeholder={'Value'}
                                  type="number"
                                  h="100%"
                                  borderRightRadius={0}
                                />
                              </FormControl>
                            )}
                          </Field>
                          <InputRightAddon h="100%">HUF</InputRightAddon>
                        </InputGroup>
                      </HStack>
                    </Container>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button
                      colorScheme="blue"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Save
                    </Button>
                  </DrawerFooter>
                </Container>
              </DrawerContent>
            </Form>
          )}
        </Formik>
      </Drawer>
    </>
  );
}

export default NewExpense;
